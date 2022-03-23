require("dotenv").config();

const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");

const { getData } = require("./db");
const app = express();
const bcrypt = require("bcrypt");
const { response } = require("express");
const authorRoute = require("./routes/Author");
const publisherRoute = require("./routes/Publisher");
const bookRoute = require("./routes/Books");
const bookTypeRoute = require("./routes/BookTypes");

app.use(cors());
app.options("*", cors());
app.use(express.json());

const deleteObj = (data, column, search) => {
  let result = data.filter((m) => m[column] !== search);

  return result;
};

app.use("/authors", authorRoute);
app.use("/publishers", publisherRoute);
app.use("/books", bookRoute);
app.use("/booktypes", bookTypeRoute);

//For Books Authors List
app.get("/bookauthors/:id", async function (request, response) {
  const authors = await getData(
    `SELECT a.* FROM BookAuthors ba
    LEFT JOIN authors a
    ON ba.authorId = a.id
    WHERE bookId = ${request.params.id}`
  );
  response.status(200).json({ authors: authors.recordsets[0] });
});

//for searching books
app.get("/search/:keyword", async function (request, response) {
  const search = await getData(
    `SELECT * 
    FROM Books 
    WHERE name 
    LIKE '%${request.params.keyword}%'`
  );
  response.status(200).json({ search: search.recordsets[0] });
});

//User Login
app.get("/users/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT password 
  FROM Users
  WHERE email ='${email}'`);

  const userPassword = user.recordsets[0][0].password;

  if (userPassword == null) {
    return response.status(400).send("cant find user");
  }
  try {
    if (await bcrypt.compare(password, userPassword)) {
      const accessToken = jwt.sign(email, process.env.ACESS_TOKEN_SECRET);
      response.json({ accessToken: accessToken });
    } else {
      response.send("Denied");
    }
  } catch (err) {
    request.status(500).send();
  }
});

//authentication
function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return response.sendStatus(401);
  }

  jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, email) => {
    if (err) return response.sendStatus(403);

    request.email = email;
    next();
  });
}

//get users
app.get("/users", authenticateToken, async (request, response) => {
  const books = await getData("EXEC spa_get_books");
  response.status(200).json({ books: books.recordsets[0] });
});

//Insert user Info (registration)
app.post("/users", async function (request, response) {
  const { name, email, username, password, dob } = request.body;
  try {
    const hassedPassword = await bcrypt.hash(password, 10);
    const insertUserData = await getData(
      `EXEC spa_insert_users @userName = '${username}'
      , @email = '${email}'
      , @password	= '${hassedPassword}'
      , @name = '${name}'
      , @dob = '${dob}'`
    );

    if (insertUserData.recordset[0].status === "Error") {
      response
        .status(400)
        .json({ errorMessage: insertUserData.recordset[0].message });
      return;
    }
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

app.listen(3000, function () {
  console.log("Server Running at port 3000");
});

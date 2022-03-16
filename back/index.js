require("dotenv").config();

const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");

const { getData } = require("./db");
const app = express();
const bcrypt = require("bcrypt");

app.use(cors());
app.options("*", cors());
app.use(express.json());

const deleteObj = (data, column, search) => {
  let result = data.filter((m) => m[column] !== search);

  return result;
};

const books = [];

//For Book Id Details
app.get("/books/:id", async function (request, response) {
  const books = await getData(
    `SELECT * FROM Books WHERE id = ${request.params.id}`
  );
  response.status(200).json({ books: books.recordsets[0] });
});

//for Book Lists
app.get("/books", async function (request, response) {
  const books = await getData("SELECT * FROM Books");
  response.status(200).json({ books: books.recordsets[0] });
});

//for Authors
app.get("/authors", async function (request, response) {
  const authors = await getData(`SELECT * FROM Authors`);
  response.status(200).json({ authors: authors.recordsets[0] });
});

//for author-id
app.get("/authors/:id", async function (request, response) {
  const authors = await getData(
    `SELECT * FROM Authors WHERE id = ${request.params.id}`
  );
  response.status(200).json({ authors: authors.recordsets[0] });
});

//for Publishers
app.get("/publishers", async function (request, response) {
  const publishers = await getData(`SELECT * FROM Publishers`);
  response.status(200).json({ publishers: publishers.recordsets[0] });
});

//for Types
app.get("/book-types", async function (request, response) {
  const types = await getData(`SELECT * FROM BookTypes`);
  response.status(200).json({ types: types.recordsets[0] });
});

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

//Get Publisher
app.get("/publishers/:id", async function (request, response) {
  const publisher = await getData(
    `SELECT * 
    FROM Publishers
    WHERE id =${request.params.id}`
  );
  response.status(200).json({ publisher: publisher.recordsets[0] });
});

//For Book Type
app.get("/book-types/:id", async function (request, response) {
  const bookType = await getData(
    `SELECT * 
    FROM BookTypes
    WHERE id =${request.params.id}`
  );
  response.status(200).json({ bookType: bookType.recordsets[0] });
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

//Insert user Info
app.post("/users", async function (request, response) {
  const { username, email, password } = request.body;
  try {
    const hassedPassword = await bcrypt.hash(password, 10);
    const insertUserData = await getData(
      `INSERT INTO Users (username,email,password) 
      VALUES ('${username}','${email}','${hassedPassword}')`
    );
    console.log(insertUserData);
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//get users
app.get("/users", authenticateToken, async (request, response) => {
  // const users = await getData("SELECT * FROM Users");
  // response.status(200).json({ users: users.recordsets[0] });

  const books = await getData("SELECT * FROM Books");
  response.status(200).json({ books: books.recordsets[0] });

  // response.json(users.filter((email) => email.email === request.user.name));
});

app.get("/users/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT password FROM Users
  WHERE email ='${email}'`);

  const userPassword = user.recordsets[0][0].password;

  if (userPassword == null) {
    return response.status(400).send("cant find user");
  }
  try {
    if (await bcrypt.compare(password, userPassword)) {
      // response.status(200).send("sucess") ;

      const accessToken = jwt.sign(email, process.env.ACESS_TOKEN_SECRET);
      response.json({ accessToken: accessToken });
    } else {
      response.send("Denied");
    }
  } catch (err) {
    request.status(500).send();
  }
});

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return response.sendStatus(401);
    // console.log("dasdasdasdada");
  }

  jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, email) => {
    if (err) return response.sendStatus(403);

    request.email = email;
    next();
  });
}

app.put("/books/:id", function (request, response) {
  //Update record
  let index = books.findIndex(function (book) {
    return book.id == request.params.id;
  });
  books[index].name = request.body.name;
  console.log(request.params.id);
  response.sendStatus(200);
});

app.delete("/books/:id", function (request, response) {
  //delete record
  let index = books.findIndex(function (book) {
    return book.id == request.params.id;
  });
  books.splice(index, 1);
  console.log(request.params.id);
  response.sendStatus(200);
});

app.listen(3000, function () {
  console.log("Server Running at port 3000");
});

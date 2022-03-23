require("dotenv").config();

const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");

const { getData } = require("./db");
const app = express();
const bcrypt = require("bcrypt");
const { response } = require("express");

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

//Get Publisher using id
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

//for Book Lists
app.get("/books", async function (request, response) {
  const books = await getData("EXEC spa_get_books");
  response.status(200).json({ books: books.recordsets[0] });
});

//Admin Add Publisher
app.post("/add-publisher", async function (request, response) {
  const { publisher } = request.body;
  try {
    const insertUserData = await getData(
      `EXEC spa_insert_publisher @name = '${publisher}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Update New  BookType
app.post("/update/book-type", async (request, response) => {
  const { id, bookType } = request.body;
  const data = await getData(
    `EXEC spa_update_bookType @id = ${id}, @name = '${bookType}'`
  );
  response.send(200);
});

//Update New  Publisher
app.post("/update/publisher", async (request, response) => {
  const { id, publisher } = request.body;
  const data = await getData(
    `EXEC spa_update_publisher @id = ${id}, @name = '${publisher}'`
  );
  response.send(200);
});

//Update New  Author
app.post("/update/author", async (request, response) => {
  const { id, author } = request.body;
  const data = await getData(
    `EXEC spa_update_author @id = ${id}, @name = '${author}'`
  );
  response.send(200);
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

//Admin Add Author
app.post("/add-author", async function (request, response) {
  const { author } = request.body;
  try {
    const insertUserData = await getData(
      `EXEC spa_insert_authors @name = '${author}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Admin Add Book-Type
app.post("/add-type", async function (request, response) {
  const { type } = request.body;
  try {
    const insertUserData = await getData(
      `EXEC spa_insert_types @name = '${type}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Delete Books
app.delete("/delete/book/:id", async function (request, response) {
  deleteBook = await getData(`EXEC spa_delete_books @id =${request.params.id}`);

  if (deleteBook.recordset[0].status === "Success") {
    response
      .status(200)
      .json({ successMessage: deleteBook.recordset[0].message });
    return;
  }
  response.status(200);
});

//Delete Book Type
app.delete("/delete/book-type/:id", async function (request, response) {
  deleteBookType = await getData(
    `EXEC spa_delete_bookType @id =${request.params.id}`
  );

  if (deleteBookType.recordset[0].status === "Error") {
    response
      .status(200)
      .json({ errorMessage: deleteBookType.recordset[0].message });
    return;
  }else if (deleteBookType.recordset[0].status === "Success"){
    response
      .status(200)
      .json({ successMessage: deleteBookType.recordset[0].message });
    return;
  }
  response.status(200);
});


//Delete Author
app.delete("/delete/author/:id", async function (request, response) {
  deleteAuthor = await getData(
    `EXEC spa_delete_author @id =${request.params.id}`
  );

  if (deleteAuthor.recordset[0].status === "Error") {
    response
      .status(200)
      .json({ errorMessage: deleteAuthor.recordset[0].message });
    return;
  }else if (deleteAuthor.recordset[0].status === "Success"){
    response
      .status(200)
      .json({ successMessage: deleteAuthor.recordset[0].message });
    return;
  }
  response.status(200);
});


app.listen(3000, function () {
  console.log("Server Running at port 3000");
});

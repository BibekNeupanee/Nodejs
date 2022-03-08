const path = require("path");
const express = require("express");

var cors = require("cors");
const { getData } = require("./db");

const app = express();
app.use(cors());
app.options("*", cors());

app.use(express.json());

const deleteObj = (data, column, search) => {
  let result = data.filter((m) => m[column] !== search);

  return result;
};

const books = [];
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
  const books = await getData(
    `SELECT * FROM Authors`
  );
  response.status(200).json({ books: books.recordsets[0] });
});

app.post("/books", function (request, response) {
  books.push({ id: new Date().valueOf(), name: request.body.name });
  response.sendStatus(201);
});

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

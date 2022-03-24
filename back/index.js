require("dotenv").config();

const express = require("express");

var cors = require("cors");

const { getData } = require("./db");
const app = express();

const authorRoute = require("./routes/Author");
const publisherRoute = require("./routes/Publisher");
const bookRoute = require("./routes/Books");
const bookTypeRoute = require("./routes/BookTypes");
const searchRoute = require("./routes/Search");
const usersRoute = require("./routes/Users");
const bookAuthorRoute = require("./routes/BookAuthors");

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/authors", authorRoute);
app.use("/publishers", publisherRoute);
app.use("/books", bookRoute);
app.use("/booktypes", bookTypeRoute);
app.use("/search", searchRoute);
app.use("/users", usersRoute);
app.use("/bookauthors", bookAuthorRoute);


app.listen(3000, function () {
  console.log("Server Running at port 3000");
});

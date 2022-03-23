const express = require("express");
const { getData } = require("../db");
const router = express.Router();

//for Book Lists
router.get("/", async function (request, response) {
  const books = await getData("EXEC spa_get_books");
  response.status(200).json({ books: books.recordsets[0] });
});

//For Book Id Details
router.get("/:id", async function (request, response) {
  const books = await getData(
    `SELECT * FROM Books WHERE id = ${request.params.id}`
  );
  response.status(200).json({ books: books.recordsets[0] });
});

//Delete Books
router.delete("/:id", async function (request, response) {
  deleteBook = await getData(`EXEC spa_delete_books @id =${request.params.id}`);

  if (deleteBook.recordset[0].status === "Success") {
    response
      .status(200)
      .json({ successMessage: deleteBook.recordset[0].message });
    return;
  }
  response.status(200);
});

module.exports = router;

require("dotenv").config();

const express = require("express");
const { getData } = require("../db");
const multer = require("multer");
const mime = require("mime-types");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (request, file, callback) {
    callback(
      null,
      file.originalname + Date.now() + "." + mime.extension(file.mimetype)
    );
  },
});

const upload = multer({ storage });

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

router.get("/types/:id", async function (request, response) {
  const books = await getData(
    `SElECT * FROM Books WHERE bookTypeId = ${request.params.id}`
  );
  response.status(200).json({ books: books.recordsets[0] });
});

//for similar books
router.get("/similar/:id", async function (request, response) {
  const books = await getData(
    `SELECT t.* 
    FROM  Books b
    INNER JOIN Books t
    ON b.bookTypeId = t.bookTypeId
    AND b.id = ${request.params.id}
    WHERE t.id <> ${request.params.id}`
  );
  response.status(200).json({ books: books.recordsets[0] });
});

//Insert Books
router.post("/", upload.single("image"), async function (request, response) {
  const imageURL = `${process.env.BASE_URL}:${process.env.PORT}/uploads/${request.file.filename}`;

  // return response.send(200);

  const {
    bookName,
    year,
    isbn,
    edition,
    authors,
    publisher,
    bookType,
    price,
    pages,
    description,
  } = request.body;
  try {
    const insertBooks = await getData(
      `EXEC spa_insert_books @name = '${bookName}'
      , @year = '${year}'
      , @pages = ${pages}
      , @isbn = '${isbn}'
      , @edition = ${edition}
      , @publisherId = ${publisher}
      , @bookTypeId = ${bookType}
      , @price = ${price}
      , @author_ids = '${authors}'
      , @description = '${description}'
      , @image = '${imageURL}'`
    );

    if (insertBooks.recordset[0].status === "Error") {
      response
        .status(400)
        .json({ errorMessage: insertBooks.recordset[0].message });
      return;
    } else if (insertBooks.recordset[0].status === "Success") {
      response
        .status(201)
        .json({ successMessage: insertBooks.recordset[0].message });
      return;
    }
  } catch (e) {
    // request.status(500).send();
    console.log(e);
  }
});

//Insert Books
router.put("/", upload.single("image"), async function (request, response) {
  console.log(request.file);

  const imageParms = request.file
    ? ", @image = '" +
      `${process.env.BASE_URL}:${process.env.PORT}/uploads/${request.file.filename}` +
      "'"
    : "";

  console.log(imageParms);

  const a = Object.entries(request.body)
    .map(([key, value]) => {
      return `@${key}='${value}'`;
    })
    .join(", ");

  console.log(a);

  const insertBooks = await getData(`EXEC spa_insert_books ${a} ${imageParms}`);

  if (insertBooks.recordset[0].status === "Error") {
    response
      .status(400)
      .json({ errorMessage: insertBooks.recordset[0].message });
    return;
  } else if (insertBooks.recordset[0].status === "Success") {
    response
      .status(201)
      .json({ successMessage: insertBooks.recordset[0].message });
    return;
  }
});

//Delete Books
router.delete("/:id", async function (request, response) {
  deleteBook = await getData(`EXEC spa_delete_books @id =${request.params.id}`);

  if (deleteBook.recordset[0].status === "Success") {
    response
      .status(200)
      .json({ successMessage: deleteBook.recordset[0].message });
    return;
  } else if (deleteBook.recordset[0].status === "Success") {
    response
      .status(201)
      .json({ successMessage: deleteBook.recordset[0].message });
    return;
  }
  response.status(200);
});

module.exports = router;

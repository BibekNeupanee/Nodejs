const express = require("express");
const { getData } = require("../db");
const multer = require("multer");
const mime = require("mime-types");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./uploads/author-picture");
  },
  filename: function (request, file, callback) {
    callback(
      null,
      file.originalname + Date.now() + "." + mime.extension(file.mimetype)
    );
  },
});

const upload = multer({ storage });

//for Authors
router.get("/", async function (request, response) {
  const authors = await getData(`SELECT * FROM Authors`);
  response.status(200).json({ authors: authors.recordsets[0] });
});

//for author-id
router.get("/:id", async function (request, response) {
  const authors = await getData(
    `SELECT * FROM Authors WHERE id = ${request.params.id}`
  );
  response.status(200).json({ authors: authors.recordsets[0] });
});

router.get("/author/:id", async function (request, response) {
  const authors = await getData(
    `EXEC spa_get_author_books @authorId = ${request.params.id}`
  );
  console.log(authors.recordsets[0]);
  response.status(200).json({ authors: authors.recordsets[0] });
});

//Update Author
router.put("/", async (request, response) => {
  const { id, author } = request.body;
  const data = await getData(
    `EXEC spa_update_author @id = ${id}, @name = '${author}'`
  );
  response.send(200);
});

//Add Author
router.post("/", upload.single("image"), async function (request, response) {
  const { name } = request.body;
  console.log(name);
  console.log(request.file.filename);
  // return response.sendStatus(200);
  const imageURL = `${process.env.BASE_URL}:${process.env.PORT}/uploads/author-picture/${request.file.filename}`;
  console.log(imageURL);

  try {
    const insertUserData = await getData(
      `EXEC spa_insert_authors @name = '${name}' ,@image = '${imageURL}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Delete Book Type
router.delete("/:id", async function (request, response) {
  author = await getData(`EXEC spa_delete_author @id =${request.params.id}`);

  if (author.recordset[0].status === "Error") {
    response.status(200).json({ errorMessage: author.recordset[0].message });
    return;
  } else if (author.recordset[0].status === "Success") {
    response.status(200).json({ successMessage: author.recordset[0].message });
    return;
  }
  response.status(200);
});

module.exports = router;

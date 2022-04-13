const express = require("express");
const { getData } = require("../db");
const router = express.Router();

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
router.post("/", async function (request, response) {
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

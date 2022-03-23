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

//Update New  Author
router.put("/", async (request, response) => {
  const { id, author } = request.body;
  const data = await getData(
    `EXEC spa_update_author @id = ${id}, @name = '${author}'`
  );
  response.send(200);
});

//Admin Add Author
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

module.exports = router;

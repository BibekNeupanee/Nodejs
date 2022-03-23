const express = require("express");
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

module.exports = router;

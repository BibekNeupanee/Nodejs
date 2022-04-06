const express = require("express");
const { getData } = require("../db");
const router = express.Router();

router.post("/:id", async function (request, response) {
  const cart = await getData(
    `EXEC spa_insert_cart @bookId = ${request.params.id}`
  );
  response.status(200).json({ types: types.recordsets[0] });
});

module.exports = router;

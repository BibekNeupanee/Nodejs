const express = require("express");
const { getData } = require("../db");
const router = express.Router();

//for searching books
router.get("/:keyword", async function (request, response) {
  const search = await getData(
    `SELECT * 
      FROM Books 
      WHERE name 
      LIKE '%${request.params.keyword}%'`
  );
  response.status(200).json({ search: search.recordsets[0] });
});

module.exports = router;

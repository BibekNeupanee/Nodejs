const express = require("express");
const { getData } = require("../db");
const router = express.Router();

//for Types
router.get("/", async function (request, response) {
  const types = await getData(`SELECT * FROM BookTypes`);
  response.status(200).json({ types: types.recordsets[0] });
});

//For Book Type
router.get("/:id", async function (request, response) {
  const bookType = await getData(
    `SELECT * 
    FROM BookTypes
    WHERE id =${request.params.id}`
  );
  response.status(200).json({ bookType: bookType.recordsets[0] });
});

//Update New  BookType
router.put("/", async (request, response) => {
  const { id, bookType } = request.body;
  const data = await getData(
    `EXEC spa_update_bookType @id = ${id}, @name = '${bookType}'`
  );
  response.send(200);
});

//Admin Add Book-Type
router.post("/", async function (request, response) {
  const { type } = request.body;
  try {
    const insertUserData = await getData(
      `EXEC spa_insert_types @name = '${type}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Delete Book Type
router.delete("/:id", async function (request, response) {
  deleteBookType = await getData(
    `EXEC spa_delete_bookType @id =${request.params.id}`
  );

  if (deleteBookType.recordset[0].status === "Error") {
    response
      .status(200)
      .json({ errorMessage: deleteBookType.recordset[0].message });
    return;
  } else if (deleteBookType.recordset[0].status === "Success") {
    response
      .status(200)
      .json({ successMessage: deleteBookType.recordset[0].message });
    return;
  }
  response.status(200);
});

module.exports = router;

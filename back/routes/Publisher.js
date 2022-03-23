const express = require("express");
const { getData } = require("../db");
const router = express.Router();

//for Publishers
router.get("/", async function (request, response) {
  const publishers = await getData(`SELECT * FROM Publishers`);
  response.status(200).json({ publishers: publishers.recordsets[0] });
});

//Get Publisher using id
router.get("/:id", async function (request, response) {
  const publisher = await getData(
    `SELECT * 
    FROM Publishers
    WHERE id =${request.params.id}`
  );
  response.status(200).json({ publisher: publisher.recordsets[0] });
});

//Admin Add Publisher
router.post("/", async function (request, response) {
  const { publisher } = request.body;
  try {
    const insertUserData = await getData(
      `EXEC spa_insert_publisher @name = '${publisher}'`
    );
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

//Update New  Publisher
router.put("/", async (request, response) => {
  const { id, publisher } = request.body;
  const data = await getData(
    `EXEC spa_update_publisher @id = ${id}, @name = '${publisher}'`
  );
  response.send(200);
});

//Delete Publisher
router.delete("/:id", async function (request, response) {
  deletePublisher = await getData(
    `EXEC spa_delete_publisher @id =${request.params.id}`
  );

  if (deletePublisher.recordset[0].status === "Error") {
    response
      .status(200)
      .json({ errorMessage: deletePublisher.recordset[0].message });
    return;
  } else if (deletePublisher.recordset[0].status === "Success") {
    response
      .status(200)
      .json({ successMessage: deletePublisher.recordset[0].message });
    return;
  }
  response.status(200);
});

module.exports = router;

const express = require("express");
const { getData } = require("../db");
const router = express.Router();

router.get("/", async function (request, response) {
  const item = await getData(`EXEC spa_get_cart`);
  response.status(200).json({ item: item.recordsets[0] });
});

router.get("/:id", async function (request, response) {
  const item = await getData(
    `EXEC spa_get_cart_userId @userId = ${request.params.id}`
  );

  response.status(200).json({ item: item.recordsets[0] });
});

router.post("/", async function (request, response) {
  const { id, userId } = request.body;

  const cart = await getData(
    `EXEC spa_insert_cart @bookId = ${id}, @userId='${userId}'`
  );
  if (cart.recordset[0].status === "Success") {
    response.status(200).json({ message: cart.recordset[0].message });
    return;
  } else if (cart.recordset[0].status === "Error") {
    response.status(201).json({ message: cart.recordset[0].message });
    return;
  }
  response.status(200).json({ cart: cart.recordsets[0] });
});

router.delete("/:id", async function (request, response) {
  deleteBook = await getData(`EXEC spa_delete_cart @id =${request.params.id}`);

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

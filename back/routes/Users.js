const express = require("express");
const { getData } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../utils/authenticate");

const router = express.Router();

//User Login
router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT password 
  FROM Users
  WHERE email ='${email}'`);

  const userPassword = user.recordsets[0][0].password;

  if (userPassword == null) {
    return response.status(400).send("Cant find user.");
  }
  try {
    if (await bcrypt.compare(password, userPassword)) {
      const accessToken = jwt.sign(email, process.env.ACESS_TOKEN_SECRET);
      response.json({ accessToken: accessToken });
    } else {
      response.send("Denied");
    }
  } catch (err) {
    request.status(500).send();
  }
});

//get users
router.get("/", authenticateToken, async (request, response) => {
  const books = await getData("EXEC spa_get_books");
  response.status(200).json({ books: books.recordsets[0] });
});

//Insert user Info (registration)
router.post("/", async function (request, response) {
  const { name, email, username, password, dob } = request.body;
  try {
    const hassedPassword = await bcrypt.hash(password, 10);
    const insertUserData = await getData(
      `EXEC spa_insert_users @userName = '${username}'
      , @email = '${email}'
      , @password	= '${hassedPassword}'
      , @name = '${name}'
      , @dob = '${dob}'`
    );

    if (insertUserData.recordset[0].status === "Error") {
      response
        .status(400)
        .json({ errorMessage: insertUserData.recordset[0].message });
      return;
    }
    response.status(201);
  } catch {
    // request.status(500).send();
  }
});
module.exports = router;

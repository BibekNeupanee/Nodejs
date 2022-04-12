const express = require("express");
const { getData } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../utils/authenticate");

const router = express.Router();

router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT * 
    FROM Users 
    WHERE email ='${email}'`);

  try {
    const userPassword = user.recordsets[0][0].password;
    if (userPassword == null) {
      return response.status(400).send("cant find user");
    }
    if (await bcrypt.compare(password, userPassword)) {
      const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);

      const token = await getData(
        `EXEC spa_insert_token @email = '${email}',
          @token ='${refreshToken}'`
      );
      console.log(email, password);
      response.json({ ...user.recordsets[0][0], refreshToken });
    } else {
      response.send("Denied");
    }
  } catch (err) {
    // request.status(500).send();
    // response.json({ ...user.recordsets[0][0], refreshToken });
  }
});

//get users
router.get("/users", async (request, response) => {
  const user = await getData(`SELECT * FROM Users`);
  response.status(200).json({ user: user.recordsets[0] });
});

//get user books
router.get("/books/:id", async (request, response) => {
  const books = await getData(`EXEC spa_get_user_books @user = ${request.params.id} `);
  response.status(200).json({ books: books.recordsets[0] });
});

//Insert user Info (registration)
router.post("/", async function (request, response) {
  const { name, email, username, password, dob } = request.body;
  console.log(name, email, username, password, dob);
  try {
    const hassedPassword = await bcrypt.hash(password, 10);
    const insertUserData = await getData(
      `EXEC spa_insert_users @userName = '${username}'
      , @email = '${email}'
      , @password	= '${hassedPassword}'
      , @name = '${name}'
      , @dob = '${dob}'`
    );

    if (insertUserData.recordset[0].status === "Error Email") {
      response
        .status(400)
        .json({ message: insertUserData.recordset[0].message });
      return;
    } else if (insertUserData.recordset[0].status === "Success") {
      response
        .status(400)
        .json({ message: insertUserData.recordset[0].message });
    } else if (insertUserData.recordset[0].status === "Error") {
      response
        .status(400)
        .json({ message: insertUserData.recordset[0].message });
    }

    response.status(201);
  } catch {
    // request.status(500).send();
  }
});

router.delete("/logout", (request, response) => {
  //delete from token_table where token is given token

  refreshTokens = refreshTokens.filter((token) => token !== request.body.token);
  response.sendStatus(204);
});

module.exports = router;

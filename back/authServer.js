require("dotenv").config();

const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");

const { getData } = require("./db");
const app = express();
const bcrypt = require("bcrypt");

app.use(cors());
app.options("*", cors());
app.use(express.json());

//not required as it is stored in database > new token table need to be created in database
//id, userId, token
let refreshTokens = [];

app.post("/token", async (request, response) => {
  const refreshToken = request.body.token;
  const books = await getData("SELECT * FROM Books");

  if (refreshToken == null) return response.sendStatus(401);

  const token = await getData(`EXEC spa_get_token @token ='${refreshToken}'`);

  if (token.recordset.length < 1) return response.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
    if (err) return response.sendStatus(403);
    const accessToken = generateAccessToken({ name: books.recordsets[0].id });
    response.json({ accessToken });
  });
});


function generateAccessToken(email) {
  return jwt.sign({ email }, process.env.ACESS_TOKEN_SECRET, {
    expiresIn: "20s",
  });
}


app.listen(4000, function () {
  console.log("Server Running at port 4000");
});

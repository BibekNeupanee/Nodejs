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

let refreshTokens = [];

app.post("/token", async (request, response) => {
  const refreshToken = request.body.token;
  const books = await getData("SELECT * FROM Books");
  console.log(refreshToken);
  if (refreshToken == null) return response.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return response.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
    if (err) return response.sendStatus(403);
    const accessToken = generateAccessToken({ name: books.recordsets[0].id });
    response.json({ accessToken: accessToken });
  });
});


app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.get("/users/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT password FROM Users
  WHERE email ='${email}'`);

  const userPassword = user.recordsets[0][0].password;

  if (userPassword == null) {
    return response.status(400).send("cant find user");
  }
  try {
    if (await bcrypt.compare(password, userPassword)) {
      // response.status(200).send("sucess") ;

      const accessToken = generateAccessToken(email);
      const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      response.json({ accessToken, refreshToken });
    } else {
      response.send("Denied");
    }
  } catch (err) {
    // request.status(500).send();
    console.log(err);
  }
});

function generateAccessToken(email) {
  return jwt.sign({ email }, process.env.ACESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
}

app.listen(4000, function () {
  console.log("Server Running at port 4000");
});

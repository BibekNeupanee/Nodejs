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

  //get referesh token from database for specific user
  // if (!refreshTokens.includes(refreshToken)) return response.sendStatus(403);

  console.log("dsadasdasdadasd", token.recordset[0].refreshToken);
  if (token.recordset.length < 1) return response.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
    if (err) return response.sendStatus(403);
    const accessToken = generateAccessToken({ name: books.recordsets[0].id });
    response.json({ accessToken: accessToken });
  });
});

app.get("/users/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await getData(`SELECT password 
    FROM Users 
    WHERE email ='${email}'`);
  const userPassword = user.recordsets[0][0].password;

  if (userPassword == null) {
    return response.status(400).send("cant find user");
  }
  try {
    if (await bcrypt.compare(password, userPassword)) {
      const accessToken = generateAccessToken(email);
      const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);

      //update token of that specific user.
      // refreshTokens.push(refreshToken);

      //inseting token in datebase
      const token = await getData(
        `EXEC spa_insert_token @email = '${email}',
          @token ='${refreshToken}'`
      );

      //save access token to browser cookie or cache
      // localStorage.setItem("token", accessToken);
      console.log(refreshToken);
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
    expiresIn: "20s",
  });
}

app.delete("/logout", (req, res) => {
  //delete from token_table where token is given token
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

app.listen(4000, function () {
  console.log("Server Running at port 4000");
});

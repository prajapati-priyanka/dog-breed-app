require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./db/config");

const User = require("./models/User");

const Jwt = require("jsonwebtoken");
const jwtKey = "doggy-app";

const port = process.env.PORT || 8003;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.json("server start")
})

// routes for register

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({
        result: "something went wrong, please try agin afer sometime",
      });
    }
    res.send({ result, auth: token });
  });
});

// routes for login

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "something went wrong, please try agin afer sometime",
          });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({ result: "No user Found" });
    }
  } else {
    res.send({ result: "No user Found" });
  }
});

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});

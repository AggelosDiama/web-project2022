const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/Covid_Point", {
  useNewUrlParser: true,
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.pwd;

  const existingUsername = await UserModel.exists({ username: username });
  const existingEmail = await UserModel.exists({ email: email });

  if (existingUsername) {
    res.send("User already exists.");
  } else if (existingEmail) {
    res.send("Email already exists.");
  } else {
    const user = new UserModel({
      username: username,
      email: email,
      password: password,
    });
    await user.save();
    res.send("Success");
  }
});

app.listen(3001, () => {
  console.log("You are connected!");
});

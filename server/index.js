const express = require('express')
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

// DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/Covid_Point", 
{ useNewUrlParser: true }
);

app.get('/insert', async (req, res) => {
    const user = new UserModel({name: "John"}); 
    await user.save();
    res.send("Inserted DATA");
});

app.listen(3001, ()=> {
    console.log("You are connected!");
});
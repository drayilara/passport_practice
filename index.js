require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const app = express();
mongoose.connect('mongodb://localhost:27017/passport_db');



app.use(session({
    secret : process.env.SESSION_KEY,
    store : MongoStore.create({mongoUrl: 'mongodb://localhost:27017/passport_db', autoRemove: 'default'}),
    resave : true,
    saveUninitialized : true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    console.log(req.session)
    res.send('We are working on cookies and sessions');
})












app.listen(3000, () => console.log('Running on port ' + 3000));
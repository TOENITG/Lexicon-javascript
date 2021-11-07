const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// todo: require router/pages
const pages = require("./routes/pages")

dotenv.config();

// Connect to database
mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopolygy:true, useNewUrlParser:true}, () => {
    console.log("Connected to database");
});

const authRoute = require ("./routes/auth");
const secureRoute = require("./routes/secure");

//middleware
app.use(express.json());
app.use(express.static("public"));

// Route middleware
app.use("/api/user", authRoute);
app.use("/api/secure", secureRoute);
app.use("/", pages);

const PORT = process.env.PORT || 3001;

app.listen(3000,() => {
    console.log("Server is running.");
})
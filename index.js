const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/routes");

const mongodbString = process.env.DATABASE_URL;
mongoose.connect(mongodbString);
const connectDb = mongoose.connection;

connectDb.on('error' , (error) => {
    console.log(error)
})

connectDb.once("connected", () => {
    console.log("Connected");
})

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(9000 , () => {
    console.log("Express working with mongodb")
})

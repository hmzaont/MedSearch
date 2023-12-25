const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const ilacRoute = require("./routes/ilaclar")
const hastalikRoute = require("./routes/hastalik")
const connect = require('./dbconfig/db')

const port = 5002;

app.use("/api",ilacRoute)
app.use("/api",hastalikRoute)


app.listen(port,() => {
    connect();
    console.log(`${port} dinleniyor.....`)
})

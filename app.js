const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const mailRoute = require("./routes/sendMail");

app.use('/api',mailRoute);

app.use(express.json());

app.get("/api",(req,res)=>{
    res.send("API working");
})

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log("Server running on port 5000"))

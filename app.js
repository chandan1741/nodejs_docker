const express = require("express");
const app = express();

app.get("/api",(req,res)=>{
    res.send("API working");
})

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log("Server running on port 5000"))

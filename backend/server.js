const express = require("express")
const dotenv = require("dotenv")
const { chats } = require("./data/data")

dotenv.config();
const port = process.env.PORT || 5000;
const app = express()

app.get('/',(req,res)=>{
    res.send("API is Running")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get("/api/chat/:id",(req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
})

app.listen(port,console.log("Server running on port ",port))
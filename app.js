const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/UsersDBex"; //url of mongodb connection
const app = express(); //start the express server
const authToken=require('./middleware/authToken')

mongoose.connect(url, { useNewUrlParser: true }); //connext to db

// to get handle of db
const con = mongoose.connection;//from this we get hold of connection
con.on('open',()=>{
    console.log('connected..')
})
app.use(express.json())
const userRouter=require('./routes/Users');
app.use('/users',authToken,userRouter)

const authRouter=require('./routes/auth');
app.use('/',authRouter)

const PORT=process.env.PORT||9000
app.listen(PORT,()=>{
    console.log('server started')
})

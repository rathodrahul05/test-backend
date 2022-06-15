const express = require("express");
const mongoose = require("mongoose");
const url ="mongodb+srv://rahul:Rahul%405500@cluster0.78by4.mongodb.net/USERS_DB?retryWrites=true&w=majority";
const app = express(); //start the express server
const authToken = require("./middleware/authToken");

mongoose
  .connect(url, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("error in connection",err);
  }); //connext to db

// to get handle of db
// const con = mongoose.connection;//from this we get hold of connection
// con.on('open',()=>{
//     console.log('connected..')
// })
app.use(express.json());
const userRouter = require("./routes/Users");
app.use("/users", authToken, userRouter);

const authRouter = require("./routes/auth");
app.use("/", authRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("server started");
});

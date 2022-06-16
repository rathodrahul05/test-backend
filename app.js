const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const url = process.env.MONGO_URI;
const app = express(); //start the express server
const authToken = require("./middleware/authToken");

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

mongoose
  .connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("error in connection", err);
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

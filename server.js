const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const path=require("path");

//rest object
const app = express();

//configure dotenv
dotenv.config();
//connecting database
connectDB();


//middlewares
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 8080;
/*
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});



*/


app.use("/api/v1/admin", require("./routes/Adminroutes"));
app.use("/api/v1/tech", require("./routes/Techroutes"));
app.use("/api/v1/tech/lab", require("./routes/Labroutes"));
app.use("/api/v1/tech/teacher",require("./routes/Teacherroute"));
app.use("/api/v1/tech/server",require("./routes/Serverroute"));

//static files used for hosting not for local host
app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
});



app.listen(port, (req, res) => {
  console.log(
    `server is running on ${process.env.NODE_MODE} mode on port no ${process.env.PORT}`
      .bgCyan.white
  );
});

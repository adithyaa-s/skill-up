const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const connectMongoDB = require("./connection");
const userRouter = require("./routes/users");


app.listen(PORT, function(err)  {
    if(err) console.log("Server Error");
    console.log("Server Started");
})

connectMongoDB("mongodb://127.0.0.1:27017/SkillUp").then(() => console.log("MongoDB Connected")).catch(() => console.log("MongoDB Connection Failed"));

app.use(cors());
app.use(express.json());

app.use("/api/v1/users",userRouter);

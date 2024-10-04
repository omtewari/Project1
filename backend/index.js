
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT= 8080;

app.use(express.json()); 
app.use(cors()); 


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Edtech')
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err)=>{
    console.log("error connecting to DB")
  })
}

main();

//routes
app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
 res.send("i am groot")
})





app.listen(PORT,()=>{
    console.log("APP IS LISTENING ON PORT 8080")
})

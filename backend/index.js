import express from "express"
import {connectDB} from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"

dotenv.config({ path: '../.env' }); 
const app = express()

 app.get("/" , (req, res)=>{
    res.send("hello word")
 })

  

 app.use("/api/auth" , authRoutes)
app.listen(3000, ()=>{
    connectDB();
    console.log("server is ranning in port 3000");
    
})
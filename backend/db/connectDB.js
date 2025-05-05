 import mongoose from "mongoose";


 export const connectDB = async ()=>{

    try{
        console.log("mongo_uri", process.env.MONGO_URL)
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connected ${conn.connection.host}`)
    }catch(error){
        console.log("Error connection to MongDb", error.message);

        process.exit(1)
    }
 }
 
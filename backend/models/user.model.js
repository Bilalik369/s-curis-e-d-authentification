import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    email: {
        type : String,
        required : true, 
        unique:true, 
        trim: true
    },
    password :{
        type :String,
        required:true
    },
    name: {
        type :String,
        required:true
    },
    lastlogin :{
        type :Date,
        default: Date.now
    },
      
    isVerfied :{
        type:Boolean,
        default:false
    },
   

    resetPasswordToken :String,
    resetPasswordExpiresAt :Date,
    verificationToken : String,
    verificationTokenExpiresAt: Date,


}, {timestamps})

export default User = mongoose.model('User' , userSchema);
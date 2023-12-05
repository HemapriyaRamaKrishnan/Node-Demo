const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignupTutorial").then(()=>{
    console.log("mongo connected")
}).catch(()=>{
    console.log("failed to connect")
})


const loginSchema = new mongoose.Schema({
    name:{    
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("loginSignupCollection",loginSchema);
module.exports =  collection
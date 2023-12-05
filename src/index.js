const express = require("express");
const app = express()
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb")

const templatePath = path.join(__dirname,'../templates')


app.use(express.json()) 
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.render("login") //render the login page
});

app.post("/login",(req,res)=>{
    res.render("home") //render the login page
});

app.get("/signup",(req,res)=>{
    res.render("signup") //this line render the signup page
})

app.post("/signup",async (req,res)=>{
    const data =  {
        name:req.body.name,
        password:req.body.password
    }

    var reesult = await collection.insertMany([data]);
    console.log('result', reesult);
    res.render("/home")
    // res.send(reesult)

})

app.listen(3000, ()=>{
    console.log('connected')
})
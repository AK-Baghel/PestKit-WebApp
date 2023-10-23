const express=require('express')
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());

require('./db/config')
const Contact=require("./db/ContactForm")
const User=require("./db/UserData")

app.get("/formData",async (req,resp)=>{
    let formData=await Contact.find();
    if(formData.length>0){
        resp.send(formData)
    }
    else{
        resp.send({result:"NO PRODUCTS FOUND!!!"})
    }

})

app.post("/contact-form",async (req,resp)=>{
    let contact=new Contact(req.body)
    let result=await contact.save();
    resp.send(result)

})


app.get("/userData",async(req,resp)=>{
    let userData=await User.find();
    if(userData.length>0){
        resp.send(userData)
    }
    else{
        resp.send({result:"NO PRODUCTS FOUND!!!"})
    }
})

app.post("/user-data",async (req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    resp.send(result);
})


app.post('/login',async(req,resp)=>{
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
        }
        else{
            resp.send({result:'no user found'})
        }
    }
    else{
        resp.send({result:'no user found'})
    }
})


app.listen(5000);
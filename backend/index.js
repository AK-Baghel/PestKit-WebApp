const express=require('express')
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());

require('./db/config')
const Contact=require("./db/ContactForm")

app.get("/",(req,resp)=>{
    resp.send("hello how are you")
})
app.post("/contact-form",async (req,resp)=>{
    let contact=new Contact(req.body)
    let result=await contact.save();
    resp.send(result)

})

app.listen(5000);
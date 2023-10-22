const mongoose=require("mongoose");
const connect=async()=>{
    try{
        const data=await mongoose.connect("mongodb://127.0.0.1:27017/form-data") ;
        console.log("server connected");
    }
    catch(err){
        console.log(err);
    }

}
module.exports=connect();
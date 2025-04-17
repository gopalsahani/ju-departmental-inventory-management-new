const mongoose=require("mongoose");

const teacherdetail=new mongoose.Schema({
itemtype:{
type:String,
required:[true,"itemtype required"]
} 
 
});


const  purchasemodel=mongoose.model("purchase",teacherdetail);

module.exports= purchasemodel;
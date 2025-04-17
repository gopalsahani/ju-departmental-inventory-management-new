const mongoose=require("mongoose");

const teacherdetail=new mongoose.Schema({
itemtype:{
type:String,
required:[true,"itemtype required"]
} 
 
});


const  purchasetech=mongoose.model("purchasetech",teacherdetail);

module.exports= purchasetech;
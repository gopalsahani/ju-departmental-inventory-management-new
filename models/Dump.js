const mongoose=require("mongoose");

const teacherdetail=new mongoose.Schema({
itemtype:{
type:String,
required:[true,"itemtype required"]
},
deinstallationdate:{
type:String,
required:[true,"date is required"]
},
description:{
type:String,
required:[true,"description"]
},
roomtype:{
type:String
},
roomid:{
    type:String
}
});


const dump=mongoose.model("dumptech",teacherdetail);

module.exports=dump;
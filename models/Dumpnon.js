const mongoose=require("mongoose");

const teacherdetail=new mongoose.Schema({
itemtype:{
type:String,
required:[true,"itemtype required"]
},
uid:{
type:String,
required:[true,"unique required"]
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


const dumpnon=mongoose.model("dumpnon",teacherdetail);

module.exports=dumpnon;
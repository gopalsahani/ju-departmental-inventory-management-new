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
installationdate:{
type:String,
required:[true,"date is required"]
},
description:{
type:String,
required:[true,"description"]
},
serverroomid:{
    type:String,
    required:[true,"labid is required"]
}
});


const  serverdetailsnon=mongoose.model("serverdetailnon",teacherdetail);

module.exports=serverdetailsnon;
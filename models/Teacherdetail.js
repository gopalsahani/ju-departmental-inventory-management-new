const mongoose=require("mongoose");

const teacherdetail=new mongoose.Schema({
itemtype:{
type:String,
required:[true,"itemtype required"]
},
installationdate:{
type:String,
required:[true,"date is required"]
},
description:{
type:String,
required:[true,"description"]
},
desktopnumber:{
    type:String
},
ipaddress:{
    type:String
},
monitornumber:{
    type:String
},
monitorname:{
    type:String
},
mousenumber:{
    type:String
},
mousename:{
    type:String
},
keyboardnumber:{
    type:String
},
keyboardname:{
    type:String
},
cpunumber:{
    type:String
},
cpuname:{
    type:String
},
teacherid:{
    type:String,
    required:[true,"labid is required"]
},
});

const teacherdetails=mongoose.model("teacherdetail",teacherdetail);

module.exports=teacherdetails;
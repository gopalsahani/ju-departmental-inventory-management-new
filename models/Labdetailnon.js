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
labid:{
    type:String,
    required:[true,"labid is required"]
}
});


const labdetailsnon=mongoose.model("labdetailnon",teacherdetail);

module.exports=labdetailsnon;
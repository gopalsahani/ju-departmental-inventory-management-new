const mongoose = require("mongoose");

const classdetails = new mongoose.Schema({
  itemtype: {
    type: String,
    required: [true, "item name is required"],
  },
  installationdate: {
    type: String,
    required: [true, "date is required"],
  },
  description: {
    type: String,
    required: [true, "descrition is required"],
  },
  desktopnumber:{
    type:String
},
ipaddress:{
type: String,
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
  classid: {
    type: String,
    required: [true, "classid required"],
  },
});

const classdetail = mongoose.model("classdetail", classdetails);
module.exports = classdetail;

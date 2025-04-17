const mongoose=require("mongoose");

const serverdetailschema=new mongoose.Schema({
    itemtype: {
        type: String,
        required: [true, "Item type is required"],
      },
      installationdate: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      serverName: {
        type: String,
         
      },
      serverType: {
        type: String,
        
      },
      operatingSystem: {
        type: String,
        
      },
      ipaddress: {
        type: String,
        
      },
      hostname: {
        type: String,
        
      },
      macAddress: {
        type: String,
      },
      desktopnumber: {
        type: String,
      },
      monitornumber: {
        type: String,
      },
      monitorname: {
        type: String,
      },
      mousenumber: {
        type: String,
      },
      mousename: {
        type: String,
      },
      keyboardnumber: {
        type: String,
      },
      keyboardname: {
        type: String,
      },
      cpunumber: {
        type: String,
      },
      cpuname: {
        type: String,
      },
      serverroomid:{
        type: String,
        required:true
      }
    });
    
const serverdetailll=mongoose.model("serverdetail",serverdetailschema);
module.exports=serverdetailll;





 
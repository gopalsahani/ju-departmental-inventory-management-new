const mongoose = require("mongoose");

const adminschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"], //validation given
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is reqired"],
  },
  role: {
    type:String,
    default:"viewer",
    enum:["viewer","editor","admin"]  
  },
});

const adminmodel = mongoose.model("admin", adminschema);
module.exports = adminmodel;

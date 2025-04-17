const mongoose = require("mongoose");

const classschema = new mongoose.Schema({
  classname: {
    type: String,
    required: [true, "class name is required"],
  },
  classno: {
    type: Number,
    required: [true, "class no req"],
  },
  buildingname: {
    type: String,
    required: [true, "building name req"],
  },
  floorno: {
    type: Number,
    required: [true, "floor no req"],
  },
});

const classmodel = mongoose.model("class", classschema);
module.exports = classmodel;

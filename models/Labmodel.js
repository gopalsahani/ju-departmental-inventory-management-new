const mongoose = require("mongoose");

const labschema = new mongoose.Schema({
  labname: {
    type: String,
    required: [true, "lab name is required"],
  },
  labno: {
    type: Number,
    required: [true, "lab no is required"],
  },
  buildingname: {
    type: String,
    required: [true, "building name is required"],
  },
  floorno: {
    type: Number,
    required: [true, "floor no is required"],
  },
});

const lab = mongoose.model("lab", labschema);

module.exports = lab;

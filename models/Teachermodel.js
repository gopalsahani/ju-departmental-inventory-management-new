const mongoose = require("mongoose");

const teacherschema = new mongoose.Schema({
  teachername: {
    type: String,
    required: [true, "lab name is required"],
  },
  roomno: {
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

const teacher = mongoose.model("teacher", teacherschema);

module.exports = teacher;

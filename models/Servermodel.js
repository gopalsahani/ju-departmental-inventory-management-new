const mongoose = require("mongoose");

const serverschema = new mongoose.Schema({
  roomname: {
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

const servermodel = mongoose.model("server", serverschema);

module.exports = servermodel;

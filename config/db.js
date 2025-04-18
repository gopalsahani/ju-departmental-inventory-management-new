const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`mongodb connection lost : error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

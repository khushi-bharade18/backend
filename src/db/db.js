const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGODB);
  console.log("Connected to DB");
}

module.exports = connectDB;

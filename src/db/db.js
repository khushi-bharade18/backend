const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://khushibharade_db_user:o5EOvdhYTmspOyVO@cluster0.dokispi.mongodb.net/learning_db",
  );
  console.log("Connected to DB");
}

module.exports = connectDB
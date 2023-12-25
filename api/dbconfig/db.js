const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Mongoose connected");
  } catch (error) {
    console.error("Mongoose connection error:", error);
  }
};

module.exports = connect;

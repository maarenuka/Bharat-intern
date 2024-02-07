const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://deep:deepmh5@cluster0.4slukvw.mongodb.net/"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

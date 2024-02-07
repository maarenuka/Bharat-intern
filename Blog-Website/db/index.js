const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://fichadiyadeep:deepmh5@blog.co96vm5.mongodb.net/"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

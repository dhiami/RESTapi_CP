const mongoose = require("mongoose");
const connectDB = () =>
  mongoose.connect("mongodb://localhost/restapicp", () => {
    try {
      console.log("the database is connected..");
    } catch (error) {
      console.log(error);
    }
  });
module.exports = connectDB;
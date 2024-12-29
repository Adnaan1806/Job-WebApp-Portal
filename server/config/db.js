import mongoose from "mongoose";

// function to Connect to mongo db database

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("MongoDB connected"));

  await mongoose.connect(`${process.env.MONGODB_URL}/jobs`);
};

export default connectDB;

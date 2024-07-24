import mongoose from "mongoose";

const uri =
  "mongodb+srv://mohammedsarfaraz18:uoCrl1kPl8XXARwq@backnednode.5dxhpgt.mongodb.net/?retryWrites=true&w=majority&appName=BacknedNode";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log("Connected successfully to the database");
    // Perform database operations here
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } 
}

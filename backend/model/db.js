
import mongoose, { connect } from "mongoose";
// mongodb://localhost:27017


const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mernLLO", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
} 

export default connectDB;
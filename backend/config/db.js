import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pankajkush17:mynameispankaj%40@cluster0.2srsh.mongodb.net/delivery').then(()=>console.log("DataBase Connected"));
}
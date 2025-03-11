import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('DB initiallized')
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/flashGame`)
}


export default connectDB;
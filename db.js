import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
 const  Connection=()=>{
   mongoose.connect(process.env.mongodb)

    mongoose.connection.on('connected',()=>{
        console.log('Date base Connected Succsessfully')
    })
    
    mongoose.connection.on('disconnected',()=>{
        console.log('Dosconnected')
    })
    
    
    mongoose.connection.on('error',()=>{
        console.log('Error While Connecting',error.message);
    })
    
}

export default Connection



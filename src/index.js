import dotenv from "dotenv"
import connectDB from "./db/databaseconnect.js";
dotenv.config({
    path: './.env'
})

connectDB();


// async function  connectdb(){
//     try {
//         await mongoose.connect(`${process.env.MONGODb_URL}/${db_name}`)
//     } 
//             catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
        
//     }

//         }
    
// another way to create this by using ifi ( =>{} )();

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODb_URL}/${db_name}`);
        
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
        
//     }
    

// })();


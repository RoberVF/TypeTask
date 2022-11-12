import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()
async function connect(){
    try{
        await mongoose.connect(`mongodb+srv://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}${process.env.DATABASE}/?retryWrites=true&w=majority`)
        console.log("Database connected")
    }catch(e){
        console.log("An error ocurred", e)
    }
}

export default connect
import mongoose from "mongoose";
import "dotenv/config";

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

main();
export default mongoose;
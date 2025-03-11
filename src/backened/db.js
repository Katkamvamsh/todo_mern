import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI="mongodb+srv://katkamvamshi66:katkamvamshi66@cluster0.iv1a0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});
const Schema=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    completed: {
    type: Boolean,
    default: false, // Default to not completed
  },
})

const Todo= mongoose.model('Todo', Schema)
export default {Todo,mongoose}

import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todos from "./routes/todos.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/todos",todos);



const port =  process.env.PORT || 8000;
app.get('/',(req,res)=>{
    res.json({'message':"Hi Weclome to Backend"})
})

//MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log(err.message);
});




app.listen(port,()=>{
    console.log(`PORT IS RUNNING IN ${port}`)
})
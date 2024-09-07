import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
  title:{
    type:String,
    require:true
  },
  desc:{
    type:String,
    require:true
  },
  status: {
     type:Boolean,
     require:true
}
},{timestamps:true} );

const Todo = mongoose.model("Todo",todosSchema);

export default Todo;
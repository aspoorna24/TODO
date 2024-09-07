import  Express  from "express";
import  Router from "express";
import Todo from "../models/todosModel.js";

const router = Router();



//@route GET todos/
//@desc Get All todo
//@access public
router.get('/', async(req,res)=>{
        const todos = await Todo.find({});
        res.json(todos)
      });
    
   
//@route GET todos/:id
//@desc Get Todo by ID
//@access public   
router.get('/:id', async(req,res)=>{
        const todo = await Todo.findById(req.params.id);
    if(todo){
        res.json(todo);
    }
    else{
        res.status(404).json({message:' Product Not Found'});
    }
})


//@route POST todos/
//@desc Save Todo 
//@access public
router.post('/',async(req,res)=>{
    console.log(req.body);
    const {title, desc, status, time} = req.body;
    const todo = await Todo.create({title,desc,status,time})
    if(todo){
        res.status(200).json({
            _id : todo._id,
            title : todo.title,
            desc : todo.desc,
            status : todo.status
        });
    }
})

//@route Delete todos/delete/:id
//@desc To delete Todo by id
//@access public
router.delete('/delete/:id',async(req,res)=>{
    var id = req.params.id.toString();
    var todo =  await Todo.findById(id);
    const deletetodo = await Todo.deleteOne(todo)
    if(deletetodo){
        res.status(202).json({"Message":"Deleted Successfully"})
    }
})

//@route PUT todo/update/:id
//@desc To Update Todo 
//@access public
router.put('/update/:id',async(req,res)=>{
    var id = req.params.id.toString();
    const todo = await Todo.findById(id)
    console.log(todo);
    const updatetodo = await Todo.updateOne(todo, req.body)
    if(updatetodo){
        res.status(200).json({"message":"Changed Successfully" })
    }
})

export default router;
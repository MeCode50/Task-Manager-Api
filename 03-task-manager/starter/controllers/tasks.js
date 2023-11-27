const getAllTasks = (req,res)=>{
    res.send("get all task")
}

const createTask = (req,res)=>{
    res.json(req.body)
}

const getTask  = (req,res)=>{
    res.json({id: req.params.id })
}

const updateTask = (req,res)=>{
    res.json("update all tasks")
}

const deleteTask = (req,res)=>{
    res.send("delete all tasks")
}
module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
    
}
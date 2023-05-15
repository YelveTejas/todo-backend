import express from 'express'
import Todomodel from '../Model/todoModel.js'
const route = express()
route.post('/todos',async(req,res)=>{
 
    try{
        const newTodo = await Todomodel.create({
            data:req.body.data,
            createdAt:Date.now()
           })
           await newTodo.save()
        
           res.status(200).json(newTodo)
    }catch(err){
      console.log(err)
      return res.status(500).json(err.message)
    }
 
})


route.get('/todos',async(req,res)=>{
  try{
 const todos =  await Todomodel.find({}).sort({'createdAt':-1})
   res.status(200).json(todos)
  }catch(err){
   console.log(err)
  }
})


route.get('/todos/:id',async(req,res)=>{
  try{
  const todoRef= await Todomodel.findById(req.params.id)
  const todo = await Todomodel.findOneAndUpdate(
    {_id:req.params.id},
    {done:!todoRef.done}
    )

    await todo.save()
      res.status(200).json(todo)
     }catch(err){
      console.log(err)
     }
})


route.put('/todos/:id',async(req,res)=>{
  try{
    await Todomodel.findOneAndUpdate(
      {_id:req.params.id},
      {data:req.body.data}
      )
  const todo = await Todomodel.findById(req.params.id)
  
        res.status(200).json(todo)
       }catch(err){
        console.log(err)
       }
})

route.delete('/todos/:id',async(req,res)=>{
  try{
 const todo  =  await Todomodel.findByIdAndDelete({_id:req.params.id})

 res.status(200).json(todo)
  }catch(err){
   console.log(err)
  }
})

export default route
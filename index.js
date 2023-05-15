import express from "express";
import Connection from "./db.js";
import cors from 'cors'
import bodyParser from "body-parser";
import route from "./routes/todoRoutes.js";
const app = express()
app.use(cors())


app.use(express.json())
app.use('/',route)
Connection()
app.listen(3400,()=>{
    console.log('Running Successfully 3400')
})
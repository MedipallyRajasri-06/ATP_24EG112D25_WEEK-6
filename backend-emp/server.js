import exp from 'express'
import { connect } from 'mongoose'
import { empApp } from './API/empAPI.js'

import cors from 'cors'


const app = exp()
//add cors middleware


//app body parser
app.use(exp.json())
app.use(cors(
    {
        origin:["http://localhost:5173"]
    }
))
// forward req to EmpApp if path starts with /empApi
app.use('/empApi', empApp)

//connect to DB server
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/empDB")
        console.log("Connected to MongoDB")
        //start server
        app.listen(8000, () => console.log("server on port 8000.."))
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}
connectDB()

//error handling middleware     
app.use((err, req, res, next) => {
    console.log(err.name)
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: "error occured", error: err.message })
    }
    if (err.name === "CastError") {
        return res.status(400).json({ message: "error occured", error: err.message })
    }
    if (err.name === "MongooseError") {
        return res.status(400).json({ message: "error occured", error: err.message })
    }
    //server side error
    res.status(500).json({ message: "error occured", error: err })
})
//error =>{name,message,callstack}
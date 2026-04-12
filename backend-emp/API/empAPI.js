import exp from 'express'
import {empModel} from  '../modules/empModel.js'
export const empApp=exp.Router()

// DEFINE EMP REST API Routes
    //create new emp
    empApp.post("/emps",async(req,res)=>{
     //get new emp obj from req     
     const newEmp=req.body
     //save emp to db
     const savedEmp=await empModel.create(newEmp)
     //send response
     res.status(201).json(savedEmp)
    })

    //read all emps
    empApp.get("/emps",async(req,res)=>{
        //get all emps from db
        const emps=await empModel.find()
        //send response
        res.status(200).json({payload:emps})
    })

    //Edit all emps
    empApp.put("/emps/:id",async(req,res)=>{
        //get emp id from req
        const empId=req.params.id
        //get updated emp obj from req
        const updatedEmp=req.body
        //update emp in db
        const updatedEmpObj=await empModel.findByIdAndUpdate(empId,updatedEmp,{new:true})
        //send response
        res.status(200).json(updatedEmpObj)
    })

    //delete emp by id
    empApp.delete("/emps/:id",async(req,res)=>{
        //get emp id from req
        const empId=req.params.id
        //delete emp from db
        const deletedEmp=await empModel.findByIdAndDelete(empId)
        //send response
        res.status(200).json(deletedEmp)
    })
    //const anil={name:"emp1",email:"emp1@example.com",mobile:1234567890,designation:"developer",companyName:"abc"}
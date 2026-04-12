
import { useForm} from "react-hook-form"
import { useNavigate ,useLocation } from "react-router";
import { useEffect} from "react";
import axios from "axios";



function EditEmployee() {
  const { register, handleSubmit ,formState: {errors} ,setValue } = useForm();
  //get empObj from navigate hook
  const {state} = useLocation();
  const navigate = useNavigate();

  const saveModifiedEmp= async(modifiedEmpObj)=>{
      try{  
        //make HTTP req to update emp details in backend
        const res = await axios.put(`http://localhost:8000/empApi/emps/${state?._id}`,modifiedEmpObj);
        if(res.status === 200){
          //navigate to list of emps
          navigate("/list");
        }
      }
      catch(err){
        console.log("err in updating emp details",err);
      }
   } 

   useEffect(()=>{
    setValue("EMPName",state.EMPName);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
   },[state,setValue])

   
  return (
    <div>
      <h1 className='text-4xl text-center text-gray-600 mt-5'>Edit Employee</h1>
      {/*form*/}
      <form  onSubmit={handleSubmit(saveModifiedEmp)} className='max-w-md mx-auto mt-10'>
       <input
          type="text"
          placeholder="Enter name "
          {...register("EMPName")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input type="email"
         placeholder=" Enter Email"
          {...register("email")}
         className='mb-3  border-2 p-3 w-full rounded-2xl'
         disabled 
         />
        <input type="number"
         placeholder="Enter Mobile Number"
          {...register("mobile")}
           className='mb-3  border-2 p-3 w-full rounded-2xl'
         />
        <input type="text"
         placeholder="Enter Designation" 
         {...register("designation")}
          className='mb-3  border-2 p-3 w-full rounded-2xl'
           />
        <input type="text"
         placeholder="Enter Company Name"
          {...register("companyName")} 
          className='mb-3  border-2 p-3 w-full rounded-2xl'
           />

        <button type="submit" className='text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4'>
         save
        </button>
      </form>
    </div>
  )
}


export default EditEmployee
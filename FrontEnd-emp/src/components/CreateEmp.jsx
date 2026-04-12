import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { useState } from 'react';


function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);

      //make HTTP POST req
      const res = await fetch("http://localhost:8000/empApi/emps",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmpObj)
      });


      if (res.status === 201) {
        //navigate to employeees component programatically
        navigate("/list");
      }
      else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason)
      }
    }
    catch (err) {
      console.log("err in catch", err);
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }

  console.log(error);

  if (loading) {
    return <p className='text-center text-4xl'>Loading....</p>
  }
  if (error) {
    return <p className='text-center text-4xl text-red-500'>Error: {error}</p>
  }


  return (
    <div>

      <h1 className='text-4xl text-center text-gray-600 mt-5'>create new Employee</h1>
      {/*form*/}
      <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
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

        <button type="submit" className='text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4'>
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default CreateEmp
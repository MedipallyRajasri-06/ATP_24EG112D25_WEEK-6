import { useState, useEffect } from "react"
import { useNavigate } from "react-router";
import axios from "axios";
function ListOfEmps() {

  const [emps, setEmp] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee
    navigate("/employee", { state: empObj }) //empObj is the data which we want to send to employee component
  }

  const gotoEditEmployee = (empObj) => {
    //navigate to /employee
    navigate("/edit-emp", { state: empObj }) //empObj is the data which we want to send to employee component
  }

  const deleteEmpbyID = async (id) => {
   let res = await axios.delete(`http://localhost:8000/empApi/emps/${id}`);
   if(res.status === 200){
    //get latest emps data
    fetchEmps(); 
   }
  }
  // get all employees
   async function fetchEmps() {
      let res = await fetch("http://localhost:8000/empApi/emps")
      if (res.status === 200) {
        let resObj = await res.json();
        //console.log("response from backend is ", resObj);
        setEmp(resObj.payload);
      }
    }
  useEffect(() => {
    fetchEmps()
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-center text-gray-600 mt-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          emps.map((empObj,index) => (
            <div key={index} className="bg-white p-5">
              <p>{empObj.EMPName}</p>
              <p className="mb-2">{empObj.email}</p>

              {/* 3 buttons*/}
              <div>
                <button onClick={() => gotoEmployee(empObj)} className="bg-green-400 p-3 rounded-2xl text-white">View</button>
                <button onClick={() => gotoEditEmployee(empObj)} className="bg-yellow-300 p-3 rounded-2xl text-white">Edit</button>
                <button onClick={()=>deleteEmpbyID(empObj._id)} className="bg-red-500 p-3 rounded-2xl text-white">Delete</button>
              </div>
            </div>



          ))
        }
      </div>
    </div>
  )
}

export default ListOfEmps
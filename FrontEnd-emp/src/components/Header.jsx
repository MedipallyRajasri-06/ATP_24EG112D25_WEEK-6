import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-center text-2xl p-7 bg-gray-400 gap-5 text-white">
       <NavLink to="" className={({isActive})=>isActive?"text-blue-500":""}>Home</NavLink>
       <NavLink to="/create" className={({isActive})=>isActive?"text-blue-500":""}>Add Employee</NavLink>
       <NavLink to="/list" className={({isActive})=>isActive?"text-blue-500":""}>List of Employees</NavLink>
    </nav>
  )
}

export default Header

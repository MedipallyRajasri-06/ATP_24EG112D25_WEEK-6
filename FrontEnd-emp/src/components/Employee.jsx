import { useLocation } from "react-router"
function Employee() {
  //read status recieved in navigation
  const {state} = useLocation();
  console.log(state);
  return (
    <div className="p-16 text-center text-4xl">
      <p>{state.EMPName}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
    </div>
  )
}

export default Employee
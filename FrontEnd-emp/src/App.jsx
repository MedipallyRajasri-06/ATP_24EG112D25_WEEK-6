import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ListOfEmps from './components/ListOfEmps'
import CreateEmp from './components/CreateEmp'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'


function App() {
const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "create", element: <CreateEmp /> },
      { path: "list", element: <ListOfEmps />},
      {path: "employee", element: <Employee />},
      {path: "edit-emp", element: <EditEmployee />},
    ]
  }
]);



  return <RouterProvider router={routerObj} />
  
}

export default App
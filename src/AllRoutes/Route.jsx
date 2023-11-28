import {
  createBrowserRouter,

} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import EmployeeRegister from "../Pages/Register/Register";
import AdminRegister from "../Pages/AdminRegister/AdminRegister";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: '/employeeRegister',
        element: <EmployeeRegister></EmployeeRegister>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path:'/adminRegister',
        element:<AdminRegister></AdminRegister>
      }
    ],
  },
]);
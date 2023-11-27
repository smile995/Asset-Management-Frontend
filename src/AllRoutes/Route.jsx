import {
    createBrowserRouter,
    
  } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
      ],
    },
  ]);
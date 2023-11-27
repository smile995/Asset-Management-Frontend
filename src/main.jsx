import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './AllRoutes/Route.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import AuthContext from './ContaxtAPI/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthContext>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/Listed-Books/ListedBooks.jsx';

// import Nav from './Components/Header/Nav.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed books",
        element : <ListedBooks></ListedBooks>
      }
    ]
  
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

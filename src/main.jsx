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
import BookDetails from './Components/Details/BookDetails.jsx';
import ReadPage from './Components/Read Pages/ReadPage.jsx';
import Blog from './Components/Blogs/Blog.jsx';


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
        loader: () => fetch ('./books.json'),
        element : <ListedBooks></ListedBooks>
      }
      ,
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch ('./books.json'),
        element : <BookDetails></BookDetails>
      }
      ,
      {
        path :"/read pages",
        loader: () => fetch ('./books.json'),
        element: <ReadPage></ReadPage>

      },
      {
        path: "/blog",
        loader: ()=> fetch('./blog.json'),
        element: <Blog></Blog>

      }
    
    ]
  
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

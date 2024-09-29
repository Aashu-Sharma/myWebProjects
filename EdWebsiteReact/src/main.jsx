import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from '../comps/Blog';
import Contact from '../comps/Contact';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from '../comps/Home';
import About from '../comps/About';
import Course from '../comps/Course';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "courses",
        element: <Course/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

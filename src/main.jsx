import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Form, RouterProvider, createBrowserRouter } from "react-router-dom";
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)

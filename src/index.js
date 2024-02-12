import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider , Navigate} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import Pools from './pages/Pools';
import Gutters from './pages/Gutters';
import Christmas from './pages/Christmas';
import Driveways from './pages/Driveways';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    element : <Root />,
    children : [
      {
        path : "/",
        element : <Navigate to="/home"/>
      },
      {
        path : "/home",
        element : <Home />,
      },
      {
        path : "/pools",
        element : <Pools />,
      },
      {
        path : "/gutters",
        element : <Gutters />
      },
      {
        path : "/christmas",
        element : <Christmas />
      },
      {
        path : "/driveways",
        element : <Driveways />
      },
      {
        path : "/contact",
        element : <Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
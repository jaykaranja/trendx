import React from 'react';
import Detail from "./components/Detail";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: `detail/:movie_id`,
          element: <Detail />,
        },

      ],
    },
    ]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
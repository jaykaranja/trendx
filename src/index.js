import React from 'react';
import App from "./App";
import Detail from "./Detail";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: `detail/:movie_id`,
        element: <Detail />,
    },
  ]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
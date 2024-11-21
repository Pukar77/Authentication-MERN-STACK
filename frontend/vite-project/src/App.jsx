import React from "react";
import Auth from "./Component/Auth";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },

    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

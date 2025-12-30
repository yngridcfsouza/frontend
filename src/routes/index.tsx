import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

import GeneralLayout from "@/layouts/GeneralLayout";
import PublicLayout from "@/layouts/PublicLayout";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ]
  },
  {
    element: <GeneralLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

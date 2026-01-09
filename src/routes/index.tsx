import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import AddCard from "@/pages/elevator/AddCard";

import GeneralLayout from "@/layouts/GeneralLayout";
import PublicLayout from "@/layouts/PublicLayout";
import { PrivateRoutes, PublicRoutes } from "./ProtectedRoutes";
import DeleteCard from "@/pages/elevator/DeleteCard";
import AllCards from "@/pages/elevator/AllCards";
import AccessControl from "@/pages/elevator/AccessControl";
import Settings from "@/pages/Settings";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        index: true,
        element: <HomePage />,
      },
    ]
  },
  {
    element: <PrivateRoutes />,
    children:[
      {
        element: <GeneralLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "access-control",
            children: [
              {
                path: "institutional",
                element: <AccessControl />,
              },
              {
                path: "add-card",
                element: <AddCard />,
              },
              {
                path: "all-cards",
                element: <AllCards />,
              },
              {
                path: "delete-card",
                element: <DeleteCard />,
              },
            ],
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

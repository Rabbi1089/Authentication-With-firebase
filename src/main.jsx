import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import SignUp from "./page/SignUp.jsx";
import HeroLogin from "./page/HeroLogin.jsx";
import Login1 from "./page/Login1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login1 />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "HeroLogin",
        element: <HeroLogin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

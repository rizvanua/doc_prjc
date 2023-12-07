import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider"
import LogIn from "./LogIn"

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([  
  {
    path: "/login",
    element: <LogIn/>
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);
root.render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

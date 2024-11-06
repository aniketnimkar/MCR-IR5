import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Statictics from "./pages/Statictics.jsx";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statictics",
        element: <Statictics />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/userDetails/:userId",
        element: <UserDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// // src/components/routes.js
// import React from "react";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import PrivateRoute from "./PrivateRoute";

// const routes = [
//   { path: "/", name: "Home", element: <Home /> },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     element: <PrivateRoute element={<Dashboard />} />,
//   },
// ];

// export default routes;
import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
const routes = [
  {
    path: "/",
    name: "Home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  { path: "/login", name: "Login", element: <Login /> },
];

export default routes;

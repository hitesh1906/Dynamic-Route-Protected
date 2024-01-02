import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds

      return decodedToken.exp < currentTime;
    } catch (error) {
      // Handle decoding errors (e.g., invalid token format)
      console.error("Error decoding token:", error);
      return true; // Treat decoding errors as token expired
    }
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (isTokenExpired(token)) {
        console.log("Token is expired, redirecting to login");
        navigate("/login");
      }
    };

    // Call the function when the route changes
    checkTokenExpiration();
  }, [token, navigate]);

  return token && !isTokenExpired(token) ? children : null;
};

PrivateRoute.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateRoute;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useJwt } from "react-jwt";

// // const PrivateRoute = ({ element: Element }) => {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");
// //   const { isExpired } = useJwt(token);

// //   useEffect(() => {
// //     if (isExpired) {
// //       console.log("Token expired. Redirecting to login.");
// //       navigate("/login");
// //     }
// //   }, [isExpired, navigate]);

// //   return isExpired ? null : <Element />;
// // };

// // export default PrivateRoute;

// const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const { isExpired } = useJwt(token);

//   useEffect(() => {
//     if (isExpired) {
//       console.log("Token expired. Redirecting to login.");
//       navigate("/login");
//     }
//   }, [isExpired, navigate]);

//   return isExpired ? null : children;
// };

// export default PrivateRoute;

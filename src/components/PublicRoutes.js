import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoutes({ children }) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}


// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// export default function PublicRoutes({ children }) {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const response = await axios.post(
//           "/api/v1/user/getUserData",
//           { token: localStorage.getItem("token") },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setUserRole(response.data.data.role);
//         }
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//       }
//     };

//     fetchUserRole();
//   }, []);


//   if (localStorage.getItem("token") && userRole) {
//     if (userRole === "teacher") {
//       return <Navigate to="/teacher" />;
//     } else if (userRole === "student") {
//       return <Navigate to="/student" />;
//     }
//   }
//   return children;
// }

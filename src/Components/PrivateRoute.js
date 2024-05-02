import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Hook to get user information

const PrivateRoute = ({children, roles = [] }) => {
  const { currentUser } =  useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  if (!roles.some((role) => currentUser.role.includes(role))) {
    return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page
  }

  return children; // Render the protected content if authorized
};

export default PrivateRoute;
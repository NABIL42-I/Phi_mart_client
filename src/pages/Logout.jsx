import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Logout = () => {
  const { logoutUser } = useAuthContext();
  
    logoutUser();


  // Instantly redirects the user to /login without needing a click
  return <Navigate to="/login" replace />;
};

export default Logout;
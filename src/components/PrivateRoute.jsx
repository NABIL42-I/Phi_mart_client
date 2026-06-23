import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (user === null) {
    return (
       <Loading/>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;










// import { Navigate } from "react-router";
// import useAuthContext from "../hooks/useAuthContext"

// const PrivateRoute = ({children})=>{
//     const {user} = useAuthContext();
//     // console.log(1);
//     if (user === null) return <p>Loading....</p>;
//     return user? children : <Navigate to ="/login"></Navigate>
// };

// export default PrivateRoute



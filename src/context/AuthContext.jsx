import { createContext } from "react";
import useAuth from "../hooks/useAuth";
// import apiClient from "../services/api-client";

const AuthContext = createContext();

// export obj not default
export const AuthProvider = ({children}) =>{
    const allContext = useAuth();
    // const [user,setUser] = useState(null);
    // const getToken = ()=>{
    //     const token = localStorage.getItem("authtokens");
    //     return token ? JSON.parse(token):null;
    // };
    // const [authTokens,setAuthTokens]=useState(getToken());

    // // Login User
    // const loginUser = async (email,password)=>{
    //     const response = await apiClient.post("/auth/jwt/create/",{
    //         email, // returnn obj
    //         password, //password : password 
    //     });
    //       console.log(response.data)
    // };
    return (
        <AuthContext.Provider value = {allContext}>{children}</AuthContext.Provider>
    )
}

export default AuthContext
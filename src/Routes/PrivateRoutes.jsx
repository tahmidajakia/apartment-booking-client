import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>;

};

export default PrivateRoutes;
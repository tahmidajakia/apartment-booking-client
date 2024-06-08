import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace ></Navigate>;
};

export default AdminRoutes;
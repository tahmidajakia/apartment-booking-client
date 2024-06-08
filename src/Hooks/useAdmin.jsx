import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const useAdmin = () => {
   const axiosPublic = useAxiosPublic()
    const {user,loading} = useContext(AuthContext)
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin' ],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    });
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
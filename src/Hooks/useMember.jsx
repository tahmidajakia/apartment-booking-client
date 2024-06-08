import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
// import { useLoaderData } from "react-router-dom";


const useMember = () => {
    const axiosPublic = useAxiosPublic()
    const {user,loading} = useContext(AuthContext)
    const {data: isMember, isPending: isMemberLoading} = useQuery({
        queryKey: [user?.email, 'isMember' ],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/member/${user.email}`)
            console.log(res.data)
            return res.data?.member
        }
    });
    return [isMember,isMemberLoading]
};

export default useMember;
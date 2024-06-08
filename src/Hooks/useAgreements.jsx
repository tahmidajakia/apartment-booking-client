
import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useAgreements = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const { refetch, data: agreement = [] } = useQuery({
        queryKey: ['agreement', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/agreements?email=${user.email}`)
            return res.data;
        }

    })
    return [agreement,refetch]
};
export default useAgreements;
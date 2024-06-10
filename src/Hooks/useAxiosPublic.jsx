import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://hotel-apartment-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
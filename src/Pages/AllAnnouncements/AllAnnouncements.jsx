import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllAnnouncements = () => {
 

    const axiosPublic = useAxiosPublic()
    const {data: announcements = []} = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcements' );
            return res.data
        }
    });
    return (
        <div>
            <h1 className="text-2xl font-bold">All the updated Announcements from Admin </h1>
            {
                announcements.map((announcement,index) => <div key={announcement._id} className="overflow-x-auto">
                    <div className="flex items-center justify-center text-center mt-5 bg-green-300">
                    <div>
                        <h1 className="text-3xl font-bold text-green-700 pt-8">Announcement {index + 1}</h1>
                    <h1 className="bg-green-700 m-10 text-white p-4 rounded-xl w-[600px]">1. {announcement.title}</h1>
                    <h1 className="bg-green-700 m-10 text-white p-4 rounded-xl w-[600px]">2. {announcement.description}</h1>
                    </div>
            </div>
                
              </div> )
            }

        </div>
    );
};

export default AllAnnouncements;

import { useContext } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const MemberProfile = () => {
    const {user} = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users' );
            return res.data
        }
    });
    return (
        <div>
            <div className="border border-green-500 p-5 text-white ">
                    <h1 className="font-bold text-green-700">Member Profile</h1>
              </div>
               <div className="bg-green-100 p-5">
               <div className="flex pt-4 justify-center text-center items-center mx-auto">
                 <img className="rounded-full" src={user?.PhotoURL} alt="" />
               </div>
                <div className=" text-center items-center mx-auto">
                  <h1 className="text-2xl font-bold mt-5"> {user?.displayName}  </h1>
                  <h1>{user?.role}</h1>
                  <div className="divider"></div> 
                </div>
                <div className="flex justify-center gap-4">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaLinkedin></FaLinkedin>
                    <FaInstagram></FaInstagram>
                </div>
               </div>




              <div className="border border-green-500 mt-10 p-5 text-white ">
                    <h1 className="font-bold text-green-800">Member Information</h1>
              </div>
               <div className="bg-green-100 p-5">
                <form className="card-body">
                   <div className="flex justify-center gap-8">
                     <div>
                        <label className="label">
                         <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='name' placeholder="Enter Your Name" className="input input-bordered w-[400px] " />
                     </div>
                     <div>
                        <label className="label">
                         <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name='email' placeholder="Enter Your Name" className="input input-bordered w-[400px] " />
                     </div>
                   </div>
                   <div className="flex justify-center gap-8 mt-6">
                     <div>
                        <label className="label">
                         <span className="label-text">Old Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Old Password" className="input input-bordered w-[400px] " />
                     </div>
                     <div>
                        <label className="label">
                         <span className="label-text">New Password</span>
                        </label>
                        <input type="password" name='password' placeholder="New Password" className="input input-bordered w-[400px] " />
                     </div>
                   </div>
                   <div className="flex justify-center mt-8">
                      <button className="bg-green-700 text-white px-4 py-3 rounded-xl">Update Your Profile</button>
                   </div>
                </form>
               
                
               </div>
        </div>
    );
};

export default MemberProfile;
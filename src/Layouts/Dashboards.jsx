import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/images/logo.png'
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";




const Dashboards = () => {
   
  
    const [isAdmin] = useAdmin()
    const [isMember] = useMember()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-600">
            <Link to='/'>
            <img className='w-1/2 mx-auto pt-4 flex justify-center items-center text-center' src={logo} alt="" />
            </Link>
              <ul className="apartment p-6">
                {
                    isAdmin ? 
                    <>
                     <Link to='/dashboards/adminProfile'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Admin Profile
                     </li>
                  </Link>
                  <Link to='/dashboards/manageMembers'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Manage Members
                     </li>
                  </Link>
                  <Link to='/dashboards/announcement'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Make Announcement
                     </li>
                  </Link>
                  <Link to='/dashboards/agreementRequest'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Agreement Request
                     </li>
                  </Link>
                  <Link to='/dashboards/manageCoupons'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Manage Coupons
                     </li>
                  </Link>
                    </>
                    : isMember ?
                    <>
                     <Link to='/dashboards/memberProfile'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Member Profile
                     </li>
                  </Link>
                  <Link to='/dashboards/makePayment'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Make Payments
                     </li>
                  </Link>
                  <Link to='/dashboards/paymentHistory'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Payment History
                     </li>
                  </Link>
                  <Link to='/dashboards/allAnnouncements'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Announcement
                     </li>
                  </Link>
                    </>
                    
                    :
                    <>
                     <Link to='/dashboards/myProfile'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         My Profile
                     </li>
                  </Link>
                  <Link to='/dashboards/allAnnouncements'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Announcement
                     </li>
                  </Link>
                    </>
                }
            
                  


                  <div className="divider"></div> 

                  {/* common link */}
                  <Link to='/'>
                     <li className="flex gap-3 mb-3 bg-white text-green-600 p-2 rounded-xl">
                        <FaHome></FaHome> 
                         Home
                     </li>
                  </Link>
                
              </ul>
            </div>
        {/* dashboard content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboards;
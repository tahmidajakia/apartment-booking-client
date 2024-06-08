import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
          console.log(result)
          const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
              console.log(res.data)
              navigate('/')
          })
        })
  }
    return (
        <div>
             <div className="divider w-full"></div> 
            <div>
              <button onClick={handleGoogleSignIn} className="btn">
               <FaGoogle></FaGoogle>
                  GOOGLE
              </button>
            </div>
        </div>
    );
};

export default SocialLogin;
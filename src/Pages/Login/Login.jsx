import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { FaUser } from "react-icons/fa";


const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
  console.log('location in the state',location.state)

    const handleLogin = event => {
        event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        const user = result.user;
         console.log(user)
         Swal.fire({
            title: "User Login Successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace: true});
    })
    }
    return (
        <div>
            <div className="text-center text-3xl mt-10 mb-8 font-semibold text-green-600">
       <h1 className="text-3xl font-bold" > Please Login</h1>
       </div>
       <div className="flex text-5xl justify-center items-center -mb-4 ">
       <FaUser className="border border-green-700 bg-green-700 text-white p-3 rounded-full" ></FaUser>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-green-100 w-1/2 mx-auto mb-28">
        
      <form onSubmit={handleLogin}   className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-white">Login</button>
        </div>
        <h1 className="mt-10">Do not have an account please <Link className="text-green-600 font-bold" to='/register'>Register</Link></h1>
        <div className="flex">
        <div className=" flex justify-center mx-auto mt-5">
        <SocialLogin></SocialLogin>
        </div>
        </div>
      </form>
    </div>
   
        </div>
    );
};

export default Login;
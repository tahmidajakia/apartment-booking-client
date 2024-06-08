import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { FaUser } from "react-icons/fa";


const Register = () => {
  const axiosPublic = useAxiosPublic();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photoURL)
            .then(() => {
                const userInfo = {
                  name: data.name,
                  email: data.email
                }
               axiosPublic.post('/users',userInfo)
               .then(res => {
                if(res.data.insertedId){
                  console.log('user added to the database')
                  reset()
                   Swal.fire({
                   position: "top-end",
                    icon: "success",
                   title: "User created successfully",
                   showConfirmButton: false,
                   timer: 1500
                  });
                  navigate('/')
                  }
                 })
               
            })
            .catch(error => console.log(error))
        })
        
        console.log(data)
    };

    
    return (
        <div>
            <div className="text-center text-3xl mt-10 mb-16 font-semibold text-green-600">
       <h1 className="text-3xl font-bold"> Please Register</h1>
       </div>
       <div className="flex text-5xl justify-center items-center -mb-4 ">
       <FaUser className="border border-green-700 bg-green-700 text-white p-3 rounded-full" ></FaUser>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-green-100 w-1/2 mx-auto mb-24">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" {...register("name")} name='name' placeholder="Name" className="input input-bordered" required />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" required />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Password" className="input input-bordered"  />
          {/* <span>Show</span> */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-white">Register</button>
        </div>
        <h1 className="mt-10">Already have an account <Link className="text-green-600 font-bold" to='/login'>Login</Link></h1>
        <div className='flex justify-center items-center'>
      <SocialLogin></SocialLogin>
      </div>
      </form>
      
      
    </div>
    <div className="text-center mt-5">
    {/* {
        registerError && <p className="text-red-700">{registerError}</p>
      }
    {
        success && <p className="text-green-700">{success}</p>
      } */}
    </div>
        </div>
    );
};

export default Register;
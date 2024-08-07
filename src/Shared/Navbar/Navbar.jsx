import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
// import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
   }

    const navItems = <>
          <Link to='/'><li><a>Home</a></li></Link>
          <Link to='/apartment'><li><a>Apartment</a></li></Link>
          <Link to='/aboutUs'><li><a>About Us</a></li></Link>
          <Link to='/contactUs'><li><a>Contact Us</a></li></Link>
          
    </>
    return (
        <div>
            <div className="navbar xl:px-16 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <img className='w-1/3' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  {
        user ?
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.PhotoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green-700 text-white rounded-box w-52 space-y-4">
        <li className='font-bold'>UserName: {user?.displayName}</li>
        <li className='font-bold'>UserEmail: {user?.email}</li>
        <Link to='/dashboards/dashboard'>
        <li className="bg-white text-green-600 rounded-xl"><a>Dashboard</a></li>
        </Link>
        <li><a onClick={handleLogOut} >Logout</a></li>
      </ul>
    </div>
        :
        <Link to='/login' >
     <li className="btn px-8 py-3 rounded-full bg-green-700 text-white">
      <FaUser></FaUser>Login
      </li>
    
    </Link>
      }
  </div>
</div>
        </div>
    );
};

export default Navbar;
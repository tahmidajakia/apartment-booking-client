import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboards from "../Layouts/Dashboards";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/User/MyProfile";
import ApartmentDetails from "../Pages/ApartmentDetails/ApartmentDetails";
import AgreementRequest from "../Pages/Admin/AgreementRequest";
import AdminProfile from "../Pages/Admin/AdminProfile";
import Announcement from "../Pages/Admin/Announcement";
import AllAnnouncements from "../Pages/AllAnnouncements/AllAnnouncements";
import MemberProfile from "../Pages/Member/MemberProfile";
import ManageCoupons from "../Pages/Admin/ManageCoupons";
import MakePayment from "../Pages/Member/MakePayment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/apartment',
          element:<Apartment></Apartment>,
          loader:() => fetch('http://localhost:5000/apartmentCount')
        },
        {
          path: '/apartmentDetails/:id',
          element: <ApartmentDetails></ApartmentDetails>,
          loader:({params}) => fetch(`http://localhost:5000/apartment/${params.id}`)
          
        },
        {
          path: '/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/dashboards',
      element: <Dashboards></Dashboards>,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        // user profile
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'allAnnouncements',
          element: <AllAnnouncements></AllAnnouncements>
        },
        // member dashboard
        {
          path: 'memberProfile',
          element: <MemberProfile></MemberProfile>
        },
        {
          path: 'makePayment',
          element: <MakePayment></MakePayment>,
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        // admin dashboard
        {
          path: 'agreementRequest',
          element: <AgreementRequest></AgreementRequest>,
          loader:() => fetch('http://localhost:5000/users')
          
        },
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'announcement',
          element: <Announcement></Announcement>
        },
        {
          path: 'manageCoupons',
          element: <ManageCoupons></ManageCoupons>
        }
        // {
        //   path: 'announcement',
        //   element: <
        // }
      ]
    }
  ]);
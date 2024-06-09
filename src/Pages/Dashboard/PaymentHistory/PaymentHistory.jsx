import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
           const res = await axiosPublic.get(`/payments/${user.email}`)
           return res.data;
        }
    })
    return (
        <div>
             <h1>Total Payment: {payments.length}</h1>
             <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Total Paid Rent</th>
        <th>Transaction Id</th>
        <th>Status</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,index) => <tr key={payment._id}>
        <th>{index + 1}</th>
        <td>{payment.email}</td>
        <td>{payment.rent}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
        <td>{payment.date}</td>
      </tr>) }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;
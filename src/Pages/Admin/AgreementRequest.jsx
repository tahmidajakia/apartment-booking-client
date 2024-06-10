import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";


const AgreementRequest = () => {
  const user = useLoaderData()
  const [agreement,setAgreement] = useState()

  useEffect(() => {
    fetch('https://hotel-apartment-server.vercel.app/agreements')
    .then(res => res.json())
    .then(data => {
        setAgreement(data)
        console.log(data)
        
    })
  },[])
 


    const axiosPublic = useAxiosPublic()
    const {data: agreements = [], refetch} = useQuery({
        queryKey: ['agreements'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agreements' );
            return res.data
        }
    });
    
   


    // const handleAccept = agreement => {
    //     axiosPublic.patch(`/agreements/member/${agreement._id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data.modifiedCount > 0){
    //             refetch()
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${agreement.userName} is an Member Now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }

    //     })
    // };
    const handleAccept = agreement => {
        axiosPublic.patch(`/users/member/${agreement?.email}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${agreement?.name} is an Member Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        })
    };


    const handleDeleteAgreement = agreement => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosPublic.delete(`/agreements/${agreement._id}`)
            .then(res => {
              if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your agreement has been deleted.",
                  icon: "success"
                });
              }
            })
          }
        });
  }

  
    return (
        <div>
            <h1 className="text-3xl font-bold text-green-800 text-center">All Agreement Request {agreements.length}</h1>
            {/* <h1>all user {user.length}</h1> */}

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Floor no</th>
        <th>Block name</th>
        <th>Room no</th>
        <th>Rent</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
         agreements.map((agreement,index) => <tr
        key={agreement._id}>
            <th>{ index + 1 }</th>
            <td>{agreement.userName }</td>
            <td>{agreement.email}</td>
            <td>{agreement.floor_number}</td>
            <td>{agreement.block_name}</td>
            <td>{agreement.apartment_number}</td>
            <td>{agreement.rent}</td>
            <td>
            <button onClick={() => handleDeleteAgreement(agreement)} className="btn bg-green-700 text-white">Reject</button>
            </td>
            <td>
            { user?.role === 'member' ? 'Member' : <button onClick={() => handleAccept(agreement)} className="btn bg-green-700 text-white">Accept</button>
            }
            </td>
            
          </tr> )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AgreementRequest;
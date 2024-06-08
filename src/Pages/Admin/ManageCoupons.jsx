import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaTrashAlt } from "react-icons/fa";


const ManageCoupons = () => {

    const axiosPublic = useAxiosPublic()
    const {data: coupons = [], refetch} = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupons' );
            return res.data
        }
    });



    const handleCoupon = event => {
        event.preventDefault()

        const form = event.target
        const code = form.code.value
        const discount = form.discount.value
        const description =  form.description.value 
        const date = form.date.value
        const coupon = {
            code,discount,description,date
        }
        console.log(coupon)
        fetch('http://localhost:5000/coupons', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(coupon)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <h1 className="text-center text-3xl">All Coupons {coupons.length}</h1>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add New Coupon</button>
           <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                 <div className="modal-box">
                     {/* <h3 className="font-bold text-lg">Hello!</h3>
                     <p className="py-4">Press ESC key or click the button below to close</p> */}
                   <div className="modal-action">
                     <form onSubmit={ handleCoupon } className="" method="dialog ">
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="flex gap-8">
                           <div className="form-control">
                             <label className="label">
                               <span className="label-text font-bold">Coupon Code</span>
                             </label>
                               <input type="text"   name='code' placeholder="Coupon_Code" className="input input-bordered" required />
                            </div>
                           <div className="form-control">
                             <label className="label">
                               <span className="label-text font-bold">Discount Percentage</span>
                             </label>
                               <input type="text"   name='discount' placeholder="Discount_Percentage" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-4">
                             <label className="label">
                               <span className="label-text font-bold">Coupon Description</span>
                             </label>
                               <input type="text"   name='description' placeholder="Coupon_Description" className="input input-bordered" required />
                            </div>
                        <div className="form-control mt-4">
                             <label className="label">
                               <span className="label-text font-bold">Till Date</span>
                             </label>
                               <input type="date"   name='date' placeholder="Date" className="input input-bordered" required />
                            </div>
                      {/* if there is a button in form, it will close the modal */}
                      <div className="flex justify-center">
                          <button className="btn w-full mt-10 bg-green-700 text-white">Submit</button>
                      </div>
              </form>
            </div>
          </div>
            </dialog>



            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Coupon Code</th>
        <th>Discount Percentage</th>
        <th>Coupon Description</th>
        <th>Last Date</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            coupons.map(( coupon,index ) =>  <tr key={ coupon._id }>
            <th>{ index + 1 }</th>
            <td>{coupon.code}</td>
            <td>{coupon.discount}</td>
            <td>{coupon.description}</td>
            <td>{coupon.date}</td>
            <td><button><FaTrashAlt></FaTrashAlt></button></td>
            <td><button>Update</button></td>
            
          </tr> )
        }
      {/* row 1 */}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageCoupons;
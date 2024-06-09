import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAgreements from "../../Hooks/useAgreements";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";



const MakePayment = () => {
    const [agreement] = useAgreements();
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

    const totalPrice = agreement.reduce((total,agreement) => total + agreement.rent,0);
    // const realPrice = totalPrice - agreement.discount 
    // console.log(realPrice)
    
    return (
        <div>
            <div>
                {
                    agreement.map(agreement => <div key={agreement._id} className="flex justify-center items-center border border-green-800 ml-16  mx-auto mb-24"
                    >
                       
                        <form    className="card-body ">
                        <div className="form-control">
                            <label className="label">
                              <span className="label-text font-bold">Name </span>
                            </label>
                            <input type="text" defaultValue={user?.displayName}  name='name' placeholder="Name" className="input input-bordered" required />
                            
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email}  name="email" placeholder="Email" className="input input-bordered" required />
                            
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Floor Number</span>
                            </label>
                            <input type="number" defaultValue={agreement?.floor_number} name="floor_number" placeholder="Floor Number" className="input input-bordered" required />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Block Name</span>
                            </label>
                            <input type="name" defaultValue={agreement.block_name}  name="block_name" placeholder="Block Name" className="input input-bordered"  />
                          </div>
                         <div className="flex gap-4 ">
                         <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Apartment No</span>
                            </label>
                            <input type="number" defaultValue={agreement.apartment_number}  name="apartment_number" placeholder="Apartment No" className="input input-bordered"  />
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Rent</span>
                            </label>
                            <input type="number" defaultValue={agreement.rent}  name="rent" placeholder="Rent" className="input input-bordered"  />
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Date</span>
                            </label>
                            <input type="date"   name="date" placeholder="Date" className="input input-bordered"  />
                          </div>
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Discount</span>
                            </label>
                            <input type="discount" defaultValue={agreement.discount}   name="discount" placeholder="Discount" className="input input-bordered"  />
                          </div>
                         </div>
                         <div className="flex justify-center items-center">
                              <Link to='/dashboards/payment'>
                                 <button className="btn bg-green-800 text-white my-10 ">Pay</button>
                              
                              </Link>
                             </div>
                        </form>
                        
                      </div> )
                }
            </div>
            
        </div>
    );
};

export default MakePayment;
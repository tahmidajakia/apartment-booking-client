import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const ApartmentDetails = () => {
    const {user} = useContext(AuthContext)
    const apartment = useLoaderData()
    const {_id,apartment_image,floor_no,block_name,apartment_no,rent} = apartment;

    const handleAgreement = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = user?.email
        
        const floor_number = form.floor_number.value
        const block_name = form.block_name.value
        const apartment_number =  form.apartment_number.value 
        const rent = form.rent.value
        const agreement = {
            displayName : name,
            user,
            email,
            floor_number,
            block_name,
            role : 'user',
            apartment_number,
            rent,
            apartment:_id
        }
        console.log(agreement)

        fetch('http://localhost:5000/agreements', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(agreement)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-5">
           <h1>Details page {apartment._id}</h1>
           <img className="w-full h-[400px] mb-10" src={apartment.apartment_image} alt="" />
           <div>
            <h1 className="text-3xl font-bold text-green-800">Apartment</h1>
            <hr />
           </div>
           <div className="flex justify-between mt-10">
            <div className="w-1/2">
            <p className="text-2xl ">Description</p>
            <p>Welcome to Oakwood Residences, where your safety and peace of mind are our top priorities. Our modern apartment complex is designed with comprehensive safety features to ensure a secure and comfortable living environment for you and your family.

             Key Safety Features:

            24/7 Security Surveillance: Our entire premises are monitored round-the-clock by high-definition CCTV cameras strategically placed to cover all common areas, entry points, and parking facilities.
            Controlled Access Entrances: Entry to the building is restricted to residents and authorized personnel only, with secure keycard access and intercom systems at all main entrances.
            On-Site Security Personnel: Our trained security staff patrol the property 24/7, providing an additional layer of protection and prompt response to any concerns.
            Fire Safety Systems: Each apartment is equipped with state-of-the-art smoke detectors, fire alarms, and sprinkler systems. Regular fire drills ensure that all residents are familiar with evacuation procedures.
            Emergency Exits and Lighting: Clearly marked emergency exits and well-lit escape routes are available on every floor, ensuring a safe and efficient evacuation in case of emergencies.
            Secure Parking Garage: Our parking facility features controlled access gates, surveillance cameras, and ample lighting to ensure the safety of your vehicle.
            Earthquake-Resistant Design: Built to modern standards, our structure is designed to withstand seismic activity, providing added security in earthquake-prone areas.
            Child Safety Measures: Our family-friendly environment includes childproof locks on windows and balcony doors, as well as secure playgrounds with safety surfacing.
            Neighborhood Watch Program: We actively collaborate with local law enforcement and encourage resident participation in our neighborhood watch program to foster a secure community.
            Medical Emergency Protocols: Staff members are trained in first aid and CPR, and we have strategically placed AED (Automated External Defibrillator) units throughout the building for quick response to medical emergencies.
            At Oakwood Residences, we prioritize creating a safe and welcoming home for all our residents. Experience peace of mind knowing that your safety is in good hands. Come join our community today!

            Feel free to adjust any details to better fit your specific apartment building and its unique features.
           </p>
            </div>
            <div className="space-y-4 w-1/2">
            <div className="text-center text-3xl  font-semibold text-orange-600">
       <h1 className="text-3xl font-bold"> Please Register</h1>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-orange-100 ml-16  mx-auto mb-24">
      <form onSubmit={handleAgreement}   className="card-body ">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
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
          <input type="number" defaultValue={apartment.floor_no} name="floor_number" placeholder="Floor Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Block Name</span>
          </label>
          <input type="name" defaultValue={apartment.block_name}  name="block_name" placeholder="Block Name" className="input input-bordered"  />
        </div>
       <div className="flex gap-4 ">
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Apartment No</span>
          </label>
          <input type="number" defaultValue={apartment.apartment_no}  name="apartment_number" placeholder="Apartment No" className="input input-bordered"  />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rent</span>
          </label>
          <input type="number" defaultValue={apartment.rent}  name="rent" placeholder="Rent" className="input input-bordered"  />
        </div>
       </div>
       <div className="flex justify-center items-center">
            <button className="btn bg-green-800 text-white my-10 ">Agreement</button>
           </div>
      </form>
      
    </div>
            </div>
           </div>
           <div className="space-y-4 w-1/2">
            <h1 className="mr-56">Featured</h1>
            <h1>Size : 30m</h1>
            <h1>Bed Type : King Bed</h1>
            <h1>Capacity : 4 Adults, 3 Childrens</h1>
            <h1>Bathroom : Mirror Style Separate And Attached Bathroom</h1>
            </div>
        </div>
    );
};

export default ApartmentDetails;
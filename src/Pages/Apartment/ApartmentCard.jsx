import { Link } from "react-router-dom";


const ApartmentCard = ({item}) => {
    const {_id,apartment_image,floor_no,block_name,apartment_no,rent} = item;
     
   

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                <img src={apartment_image} alt="Shoes" className="rounded-xl hover:scale-105 transition-all duration-200" />
              </figure>
              <div className="card-body items-center text-center">
               <h2 className="card-title">Apartment no: {apartment_no}</h2>
                <p>{floor_no}</p>
                <p>{block_name}</p>
                <p>{rent}</p>
                 <div className="card-actions">
                   <Link to={`/apartmentDetails/${_id}`}>
                   <button className="btn btn-primary">View</button>
                   </Link>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default ApartmentCard;
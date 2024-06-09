import { Link } from "react-router-dom";


const LuxuryCard = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <Link >
            <figure>
                <img className="hover:scale-105 transition-all duration-300 md:h-72"
                 src={item.apartment_image} alt="Shoes" />
                </figure>
            </Link>
           <div className="card-body">
          <div className="flex text-center justify-center">
          <h2 className="card-title">Luxury Apartments</h2>
          </div>
          <div className="card-actions justify-center mt-5">
           <Link to={`/apartmentDetails/${item._id}`}>
           <button className="btn btn-primary">View</button>
           </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default LuxuryCard;
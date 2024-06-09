import { Link } from "react-router-dom";


const LuxuryCard = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <Link to={`/apartmentDetails/${item._id}`}>
            <figure>
                <img className="hover:scale-105 transition-all duration-300 md:h-72"
                 src={item.apartment_image} alt="Shoes" />
                </figure>
            </Link>
           <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
           <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default LuxuryCard;
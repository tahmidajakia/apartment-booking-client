import { FaHotel, FaLocationArrow, FaSubway, FaSwimmingPool } from "react-icons/fa";


const OurFacilities = () => {
    return (
        <div>
            <h1 className="text-center mt-10 mb-20 text-3xl">Our Facilities</h1>
            <div className="flex justify-center pl-8 pr-8">
                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center">
                    <FaHotel className="text-2xl text-green-800"></FaHotel>
                    </div>
                    <h1 className="text-2xl">City Views</h1>
                    <p>City View St. George, offer a pictures   living  scenic beauty.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center">
                    <FaSwimmingPool className="text-3xl text-green-800"></FaSwimmingPool>
                    </div>
                    <h1 className="text-2xl">Swimming Pool</h1>
                    <p>Learning the basics of swimming  treading water drowning.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center">
                    <FaLocationArrow className="text-2xl text-green-800"></FaLocationArrow>
                    </div>
                    <h1 className="text-2xl">South Facing</h1>
                    <p>South-facing homes have continued to attract bad reputation.</p>
                </div>
                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center">
                    <FaSubway className="text-2xl text-green-800"></FaSubway>
                    </div>
                    <h1 className="text-2xl">Subway Nearby</h1>
                    <p>Beautiful subway is situated near Apartment</p>
                </div>
            </div>
        </div>
    );
};

export default OurFacilities;
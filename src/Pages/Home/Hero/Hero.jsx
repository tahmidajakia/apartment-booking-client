import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



import house1 from '../../../assets/images/house1.jpg'
import { FaCalendar, FaUserAlt } from "react-icons/fa";


const Hero = () => {
    return (
        <div className="xl:px-16">
             <Carousel>
                <div className="h-[600px] rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${house1})`}}>
                    
                   <div className="space-y-4 pt-52">
                   <h1 className="text-white text-6xl">Apartments</h1>
                    <h1 className="text-white pt-6 ">Luxury Full Service Apartments In A Great City Center Location</h1>
                    <div className="flex justify-center items-center ">
                    <div className="flex mt-7">
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <input type="date" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <input type="date" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black ">
                            <FaUserAlt className="text-green-800"></FaUserAlt>
                            <div>
                                <h1>Guest</h1>
                                <h1 className="text-green-800"> 4 Guest </h1>
                            </div>
                        </div>
                        <div className="bg-green-800 text-center gap-3 p-6 px-8  text-white">
                            <h1 className="pt-7">Book Now</h1>
                        </div>
                    </div>
                    </div>
                   </div>
                     
                </div>
                <div className="h-[600px] rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${house1})`}}>
                    {/* <img src={house1} /> */}
                    <div className="space-y-4 pt-52">
                   <h1 className="text-white text-6xl">Apartments</h1>
                    <h1 className="text-white pt-6 ">Luxury Full Service Apartments In A Great City Center Location</h1>
                    <div className="flex justify-center items-center ">
                    <div className="flex mt-7">
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black ">
                            <FaUserAlt className="text-green-800"></FaUserAlt>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="bg-green-800 text-center gap-3 p-6 px-8  text-white">
                            <h1 className="pt-3">Book Now</h1>
                        </div>
                    </div>
                    </div>
                   </div>
                    
                    
                    
                </div>
                <div className="h-[600px] rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${house1})`}}>
                    {/* <img src={house1} /> */}
                    <div className="space-y-4 pt-52">
                   <h1 className="text-white text-6xl">Apartments</h1>
                    <h1 className="text-white pt-6 ">Luxury Full Service Apartments In A Great City Center Location</h1>
                    <div className="flex justify-center items-center ">
                    <div className="flex mt-7">
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black border-r-4">
                            <FaCalendar className="text-green-800"></FaCalendar>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="flex text-center items-center gap-3 p-6 px-8 bg-white text-black ">
                            <FaUserAlt className="text-green-800"></FaUserAlt>
                            <div>
                                <h1>Check In</h1>
                                <h1>date</h1>
                            </div>
                        </div>
                        <div className="bg-green-800 text-center gap-3 p-6 px-8  text-white">
                            <h1 className="pt-3">Book Now</h1>
                        </div>
                    </div>
                    </div>
                   </div>
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;
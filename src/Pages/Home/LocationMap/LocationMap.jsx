import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
const AnyReactComponent = ({ text }) => <div style={{color: 'red'}}><FaMapMarkerAlt className='text-5xl'></FaMapMarkerAlt></div>;
import img from '../../../assets/images/aboutcover.jpg'

const LocationMap = () => {
    const defaultProps = {
        center: {
          lat: 23.8041,
          lng: 90.4152
        },
        zoom: 11
      };
    return (
        
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-5" >
          <div className='flex gap-11'>
              {/* <div>
                 <img className='w-[550px]' src={img} alt="" />
              </div> */}
               <div className='w-1/2' style={{ height: '60vh', width: '50%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: import.meta.env.googleAPIKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
               >
               <AnyReactComponent
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text="My Marker"
               />
                </GoogleMapReact>
               </div>
               <div className='w-1/2 pt-14 space-y-5'>
                  <h1 className='text-3xl'>Great Location</h1>
                  <p>The place to unwind. With all the space to relax, refresh, and be pampered. Carefully conceived and designed to offer unlimited luxury to the discerning traveler, The united states with its 57 suites is a Luxury Business Hotel in Usa that invites you to relish luxury of a different kind. Creating higher heights of comfort and redefining new meanings to luxury, this hotel dedicates its efforts to maintaining world-class standards while constantly providing personal service without intruding on privacy. </p>
                  <button className='bg-green-800 text-white px-5 py-3'>Learn More</button>
               </div>
          </div>
        </div>
    );
};

export default LocationMap;
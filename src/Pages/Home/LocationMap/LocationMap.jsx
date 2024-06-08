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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa corporis temporibus laudantium fugit eligendi incidunt? Molestiae libero repudiandae, magnam, nisi repellat aliquid reiciendis vero harum nemo consequuntur aut corporis exercitationem omnis. Laborum dolore voluptas porro eius veritatis. Omnis, molestias?</p>
                  <button className='bg-green-800 text-white px-5 py-3'>Learn More</button>
               </div>
          </div>
        </div>
    );
};

export default LocationMap;
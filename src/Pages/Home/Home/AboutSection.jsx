import { Link } from 'react-router-dom';
import about1 from '../../../assets/images/about1.jpg'
import about2 from '../../../assets/images/about2.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="hero min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse">
                   <div className='lg:w-1/2 relative'>
                      <img src={about1} className="w-[500px] rounded-lg shadow-2xl" />
                      <img src={about2} className="max-w-sm absolute right-5 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                   </div>
                  <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <div className="divider mr-16"></div> 
                     <p className="py-6">At The Summit, we redefine modern living with our unparalleled blend of luxury, comfort, and convenience. Situated in the heart of the city, our building stands as a beacon of elegance and sophistication, offering residents a lifestyle that is both dynamic and serene.Our apartments are meticulously designed to cater to your every need. Each unit boasts spacious floor plans, high-end finishes, and breathtaking views that make everyday living an extraordinary experience. From sleek, modern kitchens to spa-inspired bathrooms, no detail is overlooked. Large windows flood your home with natural light, creating an inviting and warm atmosphere.
                     <br />
                        
                        
                     At The Summit, we do not just provide a place to stay; we provide a place to thrive. Experience the pinnacle of hospitality and make your stay memorable at The Summit.</p>
                    <Link to='/aboutUs'>
                    <button className="btn bg-green-800 text-white">More Details</button>
                    </Link>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default AboutSection;
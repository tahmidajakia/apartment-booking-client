



import img from '../../../assets/images/apartment10.jpg'
import test from '../../../assets/images/test1.jpg'

const Testimonials = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-5">
           <div className="">
             <div className="h-[500px] rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${img})`}}>
               <div className='text-center space-y-5  pt-28 text-white'>
                  <h1 className='text-3xl'>Testimonials</h1>
                  <div className='flex justify-center text-center'>
                  <p className='w-1/2 flex justify-center text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur exercitationem animi et beatae deleniti odio numquam dolorem officiis asperiores? Eaque rerum atque distinctio qui nostrum officia! Nemo, sint molestiae.</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <img className='w-[70px] rounded-full' src={test} alt="" />
                  </div>
                  <h1>Name</h1>
               </div>
           </div>
           </div>
            
        </div>
    );
};

export default Testimonials;
import img from '../../../assets/images/testimonial.jpg'
import test1 from '../../../assets/images/testt1.jpg'
import test2 from '../../../assets/images/testt2.jpg'
import test3 from '../../../assets/images/testt3.jpg'

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
        <img src={img} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className='space-y-4 md:w-4/5'>
          <h1>TESTIMONIALS</h1>
          <h1 className='text-4xl font-bold'>What Our Customers Say About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque aspernatur sint ipsum aliquid accusantium quaerat, iusto dolor voluptatum deserunt!</p>
          </div>


          <div className='flex gap-3 mt-5'>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={test1} />
                   </div>
                   </div>
                <div className="avatar">
                    <div className="w-12">
                      <img src={test2} />
                    </div>
               </div>
                   <div className="avatar">
                     <div className="w-12">
                        <img src={test3} />
                     </div>
                   </div>
                  <div className="avatar placeholder">
                       <div className="w-12 bg-neutral text-neutral-content">
                     <span>+1.5k</span>
                      </div>
                     </div>
                  </div>
                  <div>
                     <h1 className='font-bold text-2xl'>Customer Feedback</h1>
                     <h1><div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <h1 className='ml-3'>4.9 (18.6k Reviews)</h1>
  
                        </div></h1>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
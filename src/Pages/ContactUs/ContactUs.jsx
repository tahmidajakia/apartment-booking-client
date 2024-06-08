

const ContactUs = () => {
    return (
        <div className="mb-14 mt-10">
            <div className='bg-pink-50 rounded-xl mr-32 ml-32 pt-12 pb-28'>
                <div className='text-center flex justify-center items-center'>
                <form>
                <div className='flex gap-5'>
                    <div className="form-control">
                      <label className="label">
                       <span className="label-text text-green-900">Name*</span>
                      </label>
                      <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered w-[400px] " />
                    </div>
                   <div className="form-control">
                     <label className="label">
                      <span className="label-text text-green-900">Email*</span>
                      </label>
                      <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered w-[400px] " />
                    </div>
                </div>
                <div className=''>
                    <div className="form-control">
                      <label className="label">
                       <span className="label-text text-green-900">Phone*</span>
                      </label>
                      <input type="text" name='phone' placeholder="Enter Your Phone Number" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className=''>
                    <div className="form-control">
                      <label className="label">
                       <span className="label-text text-green-900">Message*</span>
                      </label>
                      <input type="text" name='message' placeholder="Write Your message Here" className="input input-bordered input-lg w-full h-[200px]" />
                    </div>
                </div>
                <button className='btn bg-green-800 text-white mt-11'>Send Message</button>

                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
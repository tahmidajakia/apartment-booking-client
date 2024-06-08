import coupon from '../../../assets/images/couponlogo.png'

const CouponCodeSection = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-5">
            <div className='flex justify-center items-center'>
                <div className='bg-green-500 text-center space-y-4 p-8 w-[500px]'>
                    <div className='flex justify-center'>
                       <h1 className='bg-black text-white p-4 w-[120px]' >Apartment</h1>
                    </div>
                    <p>20% flat off in all apartment for Eid Ul Adha but have to pay in Credit Card</p>
                   <div className='flex justify-center'>
                       <button className='border border-white text-white px-5 py-2 '>STEALDEAL</button>
                        <button className='bg-white px-5 py-2 text-green-800 '>COPY CODE</button>
                   </div>
                   <h2>Valid Till : 20 Dec,2021</h2>
                </div>
                <div>
                    <img className='w-[400px]' src={coupon} alt="" />
                </div>
            </div>

        </div>
    );
};

export default CouponCodeSection;
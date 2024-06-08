import about from '../../assets/images/aboutcover.jpg'

const AboutUs = () => {
    return (
        <div  className="max-w-screen-2xl container mx-auto xl:px-16 mt-5">
            <div className="h-[500px] mb-10 rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${about})`}}>
                   
                </div>
        </div>
    );
};

export default AboutUs;
import Hero from "../Hero/Hero";
import LocationMap from "../LocationMap/LocationMap";
import AboutSection from "./AboutSection";
import CouponCodeSection from "./CouponCodeSection";
import LuxuryApartment from "./LuxuryApartment";
import OurFacilities from "./OurFacilities";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
            <Hero></Hero>
            <OurFacilities></OurFacilities>
            <AboutSection></AboutSection>
            <LocationMap></LocationMap>
            <LuxuryApartment></LuxuryApartment>
            <Testimonials></Testimonials>
            <CouponCodeSection></CouponCodeSection>
            
            
        </div>
    );
};

export default Home;
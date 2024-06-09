import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import LuxuryCard from "./LuxuryCard";

const LuxuryApartment = () => {

    const [ apartment, setApartment] = useState([])
    const slider = React.useRef(null)

    useEffect(() => {
        fetch('http://localhost:5000/apartment')
        .then(res => res.json())
        .then(data => {
            const specials = data.filter(item => item.category === 'luxury')
            setApartment(specials)
            console.log(specials)
        })
    },[])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-16">
            <h1>luxury apartment</h1>


            <Slider {...settings}>
                {
                    apartment.map((item, i) => <LuxuryCard 
                    key={i} 
                    item={item}></LuxuryCard>)
                }
        
             </Slider>


        </div>
    );
};

export default LuxuryApartment;
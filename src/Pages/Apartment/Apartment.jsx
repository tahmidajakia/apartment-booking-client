import UseApartments from "../../Hooks/UseApartments";
import ApartmentCard from "./ApartmentCard";
import cover from '../../assets/images/apartmentcover.jpg'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const Apartment = () => {
    // const [itemsPerPage, setItemPerPage] = useState(5)
    const {count} = useLoaderData()
    const itemsPerPage = 5;
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(0)

    // const pages =[]
    // for(let i = 0; i < numberOfPages; i++){
    //   pages.push(i)
    // }
    // console.log(pages)

    const pages = [...Array(numberOfPages).keys()]


    const [apartment] = UseApartments()

    const handlePrevPage = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-16 mt-5">
            <div className="h-[500px] rounded-xl bg-no-repeat bg-cover" style={{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${cover})`}}>
                    {/* <img src={house1} alt="" /> */}
                    <h1 className="text-white text-5xl flex justify-center text-center pt-52">this is apartment</h1>
                </div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 ">
                {
                    apartment.map(item => <ApartmentCard
                         key={item._id} 
                         item={item}
                         ></ApartmentCard>)
                }
            </div>
            <div className="pagination text-center mt-6">
                <p>Current Page {currentPage}</p>
                <button className="mr-5" onClick={handlePrevPage}>Pervious</button>
                {
                    pages.map(page => <button  
                        onClick={() => setCurrentPage(page)}
                        className= { currentPage === page && 'bg-green-600 px-2 rounded-lg'} key={page}>{page}</button>)
                }
                <button className="ml-5" onClick={handleNextPage}>Next</button>
                
            </div>
            </div>
        </div>
    );
};

export default Apartment;
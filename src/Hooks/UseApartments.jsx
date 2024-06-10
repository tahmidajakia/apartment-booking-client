import { useEffect } from "react";
import { useState } from "react";

const UseApartments = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0)
      const [apartment,setApartment] = useState([]);
      const [loading,setLoading] = useState(true);
      useEffect(() => {
        fetch(`https://hotel-apartment-server.vercel.app/apartment?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => {
            setApartment(data)
            setLoading(false)
        })
      },[currentPage,itemsPerPage])
      return [apartment,loading]
}

export default UseApartments;
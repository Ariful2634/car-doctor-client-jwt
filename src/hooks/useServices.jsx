import { useEffect, useState } from "react";


const useServices = (asc, search) => {
    const [service, setService]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[asc,search])
    return service
};

export default useServices;
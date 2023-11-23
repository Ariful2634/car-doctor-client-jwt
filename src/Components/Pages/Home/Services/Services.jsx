// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../../hooks/useServices";
import Service from "./Service";


const Services = () => {
    const [asc, setAsc]=useState(true)
    const [search, setSearch] = useState('')
    const service= useServices(asc, search)
    
    

    // const [service, setService]=useState([])

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'des'}&search=${search}`)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])

    const handleSearch = e=>{
        e.preventDefault()
        const searchText = e.target.search.value;
        console.log(searchText)
        setSearch(searchText)
    }

    return (
        <div className="mt-16">
            <div className="text-center space-y-2">
            <h2 className="text-orange-600 font-bold text-xl">Service</h2>
            <h1 className="text-4xl font-bold">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>

            <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Search" className="btn" />
            </form>

            <button onClick={()=>setAsc(!asc)} className="btn btn-secondary">{asc ? 'Price: High To Low' :  'Price: Low To High'}</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
                {
                    service.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
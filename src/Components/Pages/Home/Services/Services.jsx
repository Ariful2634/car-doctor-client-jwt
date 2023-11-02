// import { useEffect, useState } from "react";
import useServices from "../../../../hooks/useServices";
import Service from "./Service";


const Services = () => {
    const service= useServices()

    // const [service, setService]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])

    return (
        <div className="mt-16">
            <div className="text-center space-y-2">
            <h2 className="text-orange-600 font-bold text-xl">Service</h2>
            <h1 className="text-4xl font-bold">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
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
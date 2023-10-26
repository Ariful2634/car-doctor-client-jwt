/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({ service }) => {

    const {_id, title, img, price } = service

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img}  alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                       <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
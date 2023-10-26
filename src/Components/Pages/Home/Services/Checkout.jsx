import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {

    const {user}=useContext(AuthContext)
    const load = useLoaderData()
    const { id } = useParams()
    console.log(load)
    console.log(id)

    const value = load.find(load => load._id == id)
    const {_id,title,img}=value

    const handleForm = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = user?.email

        const booking = {
           ServiceName:title,
            name,date,price,email, serviceId: _id,img
        }
        console.log(booking)

        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Congratulations',
                    'Service Booked Successfully!',
                    'success'
                  )
            }
        })
        
    }

    return (
        <div>
            <h2>Service date: {value.title}</h2>

            <form onSubmit={handleForm}>
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="Service Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Service Price" defaultValue={'$' +value.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* <div>
                <textarea className="textarea textarea-primary w-full h-[200px] mt-4" placeholder="Product Description"></textarea>
                </div> */}
                <div className="mt-4">
                    <button className="btn btn-block  bg-[#FF3811]">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Checkout;
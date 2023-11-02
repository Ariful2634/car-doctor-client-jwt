import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Book from "./Book";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import axios from "axios";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const axiosSecure = useAxiosSecure()

    // const url = `http://localhost:5000/booking?email=${user?.email}`
    const url = `/booking?email=${user?.email}`
    useEffect(() => {
        // axios.get(url, {withCredentials:true})
        // .then(data=>{
        //     setBooking(data.data)
        // })



        // fetch(url, {credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => setBooking(data))

        axiosSecure.get(url)
        .then(res=>{
            setBooking(res.data)
        })

    }, [url,axiosSecure])

    const handleDelete = id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booking/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remaining = booking.filter(booking=>booking._id!==id)
                              setBooking(remaining)
                    }
                })

            
            }
          })
    }

    const handleUpdate=id=>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = booking.filter(booking=>booking._id!==id)
                const updated = booking.find(booking=>booking._id==id)
                updated.status='confirm';
                const newBooking = [updated, ...remaining]
                setBooking(newBooking)


            }
        })
    }

    return (
        <div>
            <h2>Booking:{booking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                {
                    booking.map(book => <Book key={book._id} handleDelete={handleDelete} handleUpdate={handleUpdate} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Booking;
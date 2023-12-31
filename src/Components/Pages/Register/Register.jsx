import { useContext, useState } from 'react';
import log from '../Login../../../Pages../../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const[show,setShow]=useState(false)
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(res=>{
            const user = res.user
            updateProfile(user,{
                displayName:name,
                photoURL:photo
              })
            console.log(user)
            Swal.fire(
                'Congratulations',
                'User Created Successfully!',
                'success'
              )
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-28 w-1/2">
                    
                    <img className='h-[430px]' src={log} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm  border">
                    <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered" required />
                            <span className='absolute top-[53px] left-[280px]' onClick={()=>(setShow(!show))}>{show ? <FaEyeSlash></FaEyeSlash>  : <FaEye></FaEye>}</span>
                          
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white font-bold bg-[#FF3811]">Register</button>
                        </div>
                    </form>
                    <div>
                        <p className='text-center mb-4'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import image from '../../../assets/login.svg'

const Register = () => {
   
    const {createUser,userVerification,userProfileUpdate}=useContext(AuthContext)
    const [error,setError]=useState('')

    const handleSubmit=event=>{
        event.preventDefault();
        const form =event.target
        const name =form.name.value
        const photoURL =form.photoURL.value
        const email =form.email.value
        const password =form.password.value
        console.log(name,photoURL,email,password);

        createUser(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
            form.reset();
            handleNamePhotoUpdate(name,photoURL);
        })
        .catch(err =>{
            console.log(err);
            setError(err.message)
        })
    }
   
    const handleNamePhotoUpdate=(name,photoURL)=>{
        const provider={
            displayName: name,
            photoURL : photoURL
        }
        userProfileUpdate(provider)
        .then(()=>{

        })
        .catch(err=>{
            setError(err.message)
        })
    }

    // const handleUserVerify=()=>{
    //     userVerification()
    //     .then(()=>{
    //     //   toast.warning('please verification your email)
    //     })
    //     .catch(err =>{
    //         setError(err.message)
    //     })
    // }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img src={image} className='w-3/4' alt="" />
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sing Up!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="your name" name='name' className="input input-bordered" required/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name='photoURL' className="input input-bordered" required/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
              </div>
              <p className='text-red-600'>{}</p>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value='Sign Up' />
              </div>
            </form>
            <div className='text-center my-5'>
               <p className='text-xl mb-3'>Or Sign Up with</p>
               <button className='btn btn-primary text-white font-semibold mr-2'>Google Log In</button>
                 
                <p className='p-5'>Already have an account? <Link className='text-orange-600 font-bold text-center ' to='/login'>Log In</Link></p>
            </div>
          </div>
        </div>
              </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Lottie from "lottie-react";
import logo from "../../../assets/125469-meditating-panda.json"
import useTitle from '../../../Hooks/useTitle';
import { toast } from 'react-toastify';

const Login = () => {
  useTitle('Login') 
    const {logInUser,userForgetPassword,logInWithGoogle}=useContext(AuthContext)
    const [error , setError]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit=event=>{
        event.preventDefault();
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        // console.log(email,password);

        logInUser(email,password)
        .then(result =>{
            const user=result.user
            // console.log(user);
            form.reset();
            setError('')
           
    
            //get jwt token
          
           
              // localStorage.setItem('JWTtoken',data.token)
              navigate(from, { replace: true });

           
        })
        .catch(err =>{
            console.log(err);
            setError(err.message)
        })
    }

    const handleOnBlurEmail=event=>{
        setUserEmail(event.target.value)
    }
    const handleUserEmailForget=()=>{
        userForgetPassword(userEmail)
        .then(()=>{
          toast.success('forget successfully please check your email',{autoClose:500})
        })
        .catch(err=>{
            setError(err.message)
        })
    }

    const handleUserLogInGoogle=()=>{
      logInWithGoogle()
      .then(result =>{
        const user =result.user
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(err=>{
        setError(err.message)
      })
    }
 
    return (
        <div className="hero w-full my-20 mx-auto">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
    <Lottie animationData={logo} loop={true} />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
           </label>
          <input type="text" onBlur={handleOnBlurEmail} placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <Link onClick={handleUserEmailForget} className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <p className='text-red-600'>{error}</p>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value='Login' />
        </div>
      </form>
      <div className='text-center my-5'>
               <p className='text-xl mb-3'>Or Sign Up with</p>
                 <button onClick={handleUserLogInGoogle} className='btn btn-primary text-white font-semibold mr-2'>Google Log In</button>
                 <p className='p-5'>New to photo service <Link className='text-orange-600 font-bold text-center ' to='/register'>Sign Up</Link></p>
            </div>
      {/* <SocialLogIn /> */}
    </div>
  </div>
        </div>
    );
};

export default Login;
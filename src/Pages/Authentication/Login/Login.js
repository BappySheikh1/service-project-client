import React, { useContext, useState } from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import logo from "../../../assets/login.svg"
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
  useTitle('Login') 
    const {logInUser,userForgetPassword}=useContext(AuthContext)
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
          
            const currentUser={
              email: user.email
            }
            console.log(currentUser);
            //get jwt token
            fetch('http://localhost:4000/jwt',{
             method: "Post",
             headers:{
              'content-type':'application/json'
             },
             body: JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data =>{
              // console.log(data);
              localStorage.setItem('JWTtoken',data.token)
              navigate(from, { replace: true });

            })
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

        })
        .catch(err=>{
            setError(err.message)
        })
    }

    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <img src={logo} className='w-3/4' alt="" />
      
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
                 <button className='btn btn-primary text-white font-semibold mr-2'>Google Log In</button>
                 <p className='p-5'>New to photo service <Link className='text-orange-600 font-bold text-center ' to='/register'>Sign Up</Link></p>
            </div>
      {/* <SocialLogIn /> */}
    </div>
  </div>
        </div>
    );
};

export default Login;
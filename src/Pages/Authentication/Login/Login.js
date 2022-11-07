import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Login = () => {
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
        console.log(email,password);

        logInUser(email,password)
        .then(result =>{
            const user=result.user
            console.log(user);
            form.reset();
            handleUserEmailForget();
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

        })
        .catch(err=>{
            setError(err.message)
        })
    }

    return (
        <div>
            <h1>This is login page</h1>
        </div>
    );
};

export default Login;
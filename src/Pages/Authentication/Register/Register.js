import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

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
            handleUserVerify();
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

    const handleUserVerify=()=>{
        userVerification()
        .then(()=>{
        //   toast.warning('please verification your email)
        })
        .catch(err =>{
            setError(err.message)
        })
    }

    return (
        <div>
            <h2>This is register page</h2>
        </div>
    );
};

export default Register;
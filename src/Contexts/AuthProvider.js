import {getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification, updateProfile,sendPasswordResetEmail,signOut,onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext= createContext() 
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    
    // create User  
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    // user Log in
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    // login with google
    const googleProvider= new GoogleAuthProvider()
    const logInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    // User email verification
    const userVerification=()=>{
        return sendEmailVerification(auth.currentUser)
    }
   
    // user update Profile & name
    const userProfileUpdate=(provider)=>{
        return updateProfile(auth.currentUser, provider)
    }

    // forget password
    const userForgetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const userLogOut=()=>{
        localStorage.removeItem('tokenjWt')
        return signOut(auth)
    }
  
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo={
        user,
     loading,
        createUser,
        logInUser,
        userVerification,
        userProfileUpdate,
        userForgetPassword,
        userLogOut,
        logInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
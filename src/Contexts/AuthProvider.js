import {getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification, updateProfile,sendPasswordResetEmail,signOut,onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext= createContext() 
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loadding, setLoadding]=useState(true)
    
    // create User 
    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    // user Log in
    const logInUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        setLoadding(true)
        return sendPasswordResetEmail(auth, email)
    }

    const userLogOut=()=>{
        return signOut(auth)
    }
  
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoadding(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo={
        user,
        loadding,
        createUser,
        logInUser,
        userVerification,
        userProfileUpdate,
        userForgetPassword,
        userLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
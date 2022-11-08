import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCrad/MyReviewCard';

const MyReview = () => {
   const [reviewer,setReviewer]=useState([])
   const {user,userLogOut}=useContext(AuthContext)

   useEffect(()=>{
    fetch(`http://localhost:4000/review?email=${user?.email}`,{
        headers:{
            authorization:`Bearer ${localStorage.getItem('JWTtoken')}`
        }
    })
    .then(res => {
        if(res.status === 401 || res.status === 403){
            return userLogOut()
        }
        return  res.json()
    })
    .then(data => {
        setReviewer(data)
    })
   },[user?.email,userLogOut])

    return (
        <div>
            <h2 className="text-4xl font-semibold my-5">There is your review: {reviewer.length}</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-20 mx-20'>
            {
                reviewer.map(review => <MyReviewCard key={review._id} review={review} setReviewer={setReviewer} reviewer={reviewer}/>)
            }
            </div>
        </div>
    );
};

export default MyReview;
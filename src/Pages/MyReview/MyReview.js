import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewCard from './MyReviewCrad/MyReviewCard';
import useTitle from '../../Hooks/useTitle'

const MyReview = () => {
   useTitle('My Review')
   const [reviewer,setReviewer]=useState([])
   const {user,userLogOut}=useContext(AuthContext)

   useEffect(()=>{
    fetch(`http://localhost:4000/review?email=${user?.email}`,{
      headers:{
        'Content-type':"application/json",
        authorization: `Bearer ${localStorage?.getItem('tokenjWt')}`
      }
     
    })
    .then(res => {
        if(res?.status === 401 || res?.status === 403){
          return userLogOut()
        }
        return  res?.json()
    })
    .then(data => {
        setReviewer(data)
    })
   },[user?.email,userLogOut])
  
// Array reverse added
   const reverseArray =[...reviewer].reverse()

    return (
        <div>
            <h2 className="text-4xl font-semibold my-5">There is your review: {reviewer.length}</h2>
            {
                reviewer?.length === 0 && <p className='text-2xl font-semibold'>No reviews were added <Link to='/services' className='underline text-red-700'>Please added Review</Link></p>
            }
            <div className='grid  grid-cols-1 gap-6 my-20 mx-20'>
            {
                reverseArray?.map(review => <MyReviewCard key={review?._id} review={review} setReviewer={setReviewer} reviewer={reviewer}/>)
            }
            </div>
        </div>
    );
};

export default MyReview;
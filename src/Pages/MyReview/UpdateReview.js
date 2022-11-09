import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const UpdateReview = () => {
    const {rating,_id}=useLoaderData()
    
    const{user}=useContext(AuthContext)
    const handleUpdateReview=(event)=>{
        event.preventDefault();
        const form =event.target
        const name =`${form.firstName.value} ${form.lastName.value}`
        const message =form.message.value;
        // console.log(name,message);
        const userInfo={
            name: name,
            message: message
        }
        fetch(`http://localhost:4000/review/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount > 0){
                toast.success('User Update successful',{autoClose: 500})
            }
        })
    }

    return (
        <div className='my-5'>
            
           <form onSubmit={handleUpdateReview}>
            <h2 className="text-4xl font-bold my-10">Update only text description & Name</h2>
            <h2 className="text-3xl font-bold my-10">{}</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

           <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
           
           <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
           
           <input type="text" name='rating' defaultValue={rating} placeholder="Your rating" className="input input-bordered w-full " required/>
           
           <input type="text" name='email' placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
           </div>

           <div className='mt-4'>
            <label htmlFor="" className='text-lg  font-bold ml-2 '>User Photo</label>
           <input type="text" name='photoURL' placeholder="Your photoURL" defaultValue={user?.photoURL} className="input input-bordered w-full " readOnly />
           </div>

           <div className='my-7'>
           <label htmlFor="" className='text-lg  font-bold ml-2 '>Your message</label>
           <textarea className="textarea textarea-bordered h-24 w-full " name='message' placeholder="Your message" required></textarea>
           </div>

           <input type="submit" className='btn w-full text-white bg-purple-600 border-none hover:bg-purple-700' value='Update user info'  />
           </form>
        </div>
    );
};

export default UpdateReview;
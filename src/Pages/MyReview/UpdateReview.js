import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const UpdateReview = () => {
    const{user}=useContext(AuthContext)
    const handleUpdateReview=()=>{

    }
    
    return (
        <div className='my-5'>
            <div className=''>
                <img src='' alt="" className='w-full rounded-md h-[400px] mb-32'/>
            </div>
            
           <form onSubmit={handleUpdateReview}>
            <h2 className="text-4xl font-bold my-10">You are about to order {}</h2>
            <h2 className="text-3xl font-bold my-10">{}</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

           <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
           
           <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
           
           <input type="text" name='rating' placeholder="Your rating" className="input input-bordered w-full " required/>
           
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

           <input type="submit" className='btn w-full text-white bg-purple-600 border-none hover:bg-purple-700' value='Please Review This Picture'  />
           </form>
        </div>
    );
};

export default UpdateReview;
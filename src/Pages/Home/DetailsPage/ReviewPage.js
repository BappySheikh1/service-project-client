import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ReviewPage = ({image}) => {
    const {user}=useContext(AuthContext)
   
    const handleReviewPage=event=>{
        event.preventDefault();
        const form =event.target
        const name =`${form.firstName.value} ${form.lastName.value}`
        const email= user?.email || 'Unregisterd' ;
        const rating =form.rating.value;
        if(isNaN(rating)){
          return toast.error('please provide a number in rating field',{autoClose: 500})
        }
        const photoURL =form.photoURL.value;
        const message =form.message.value;
        const date = new Date();

      // console.log(name,email,rating ,message);
      const userInformation={
        user_name: name,
        email : email,
        rating : rating ,
        description: message,
        image: photoURL,
        time :date.toLocaleString()
      }
      fetch('https://service-project-server-bappysheikh1.vercel.app/review',{
        method:'POST',
        headers:{
            "content-type":'application/json'
        },
        body: JSON.stringify(userInformation)
      })
      .then(res =>res.json())
      .then(data => {
        // console.log(data);
        if(data.acknowledged){
            toast.success('Review is successfully added',{autoClose: 500})
        }
        form.reset()
      })
    }

    return (
        <div className='my-5 lg:px-10'>
            <div className=''>
                <img src={image} alt="" className='w-full rounded-md h-[400px] mb-32'/>
            </div>
            
           <form onSubmit={handleReviewPage}>
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

           <input type="submit" className='btn w-full text-white bg-purple-600 border-none hover:bg-purple-700' value='Please Review'  />
           </form>
        </div>
    );
};

export default ReviewPage;
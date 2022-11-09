import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle'
import image from '../../assets/pagla.jpg'

const AddService = () => {
    useTitle('Add Service')
    const {user}=useContext(AuthContext)
   
    const handleAddService=event=>{
        event.preventDefault();
        const form =event.target
        const title =form.title.value
        const photoURL =form.photoURL.value;
        const price= form.price.value ;
        const rating =form.rating.value;
        if(isNaN(rating) || isNaN(price)){
          return toast.error('please provide a number in rating & Price field',{autoClose: 800})
        }
        const message =form.message.value;

    
      const userInfo={
       title: title,
       image: photoURL,
       price : price,
       rating : rating,
       description: message
      }
      

      fetch('https://service-project-server.vercel.app/servicePost',{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        if(data.acknowledged){
            return toast.success('service is added successfully',{autoClose: 500})
        }
        form.reset();
    })

    }

    return (
        <div className='my-5'>
        <div className=''>
            <img src={image} alt="" className='w-full rounded-md h-[400px] mb-32'/>
        </div>
        
       <form onSubmit={handleAddService}>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Title</label>
       <input type="text" name='title' placeholder="Service title" className="input input-bordered w-full " />
       </div>
       
       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>PhotoURL</label>
       <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered w-full " />
       </div>
       
       <div>
        <label htmlFor="" className='text-lg  font-bold ml-2 '>Rating</label>
       <input type="text" name='rating' placeholder="Your rating" className="input input-bordered w-full " required/>
       </div>
       
       <div>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Price</label>
       <input type="text" name='price' placeholder="Your price"  className="input input-bordered w-full "  />
       </div>
       </div>

       <div className='my-7'>
       <label htmlFor="" className='text-lg  font-bold ml-2 '>Your message</label>
       <textarea className="textarea textarea-bordered h-24 w-full " name='message' placeholder="Your message" required></textarea>
       </div>

       <input type="submit" className='btn w-full text-white bg-blue-600 border-none hover:bg-blue-700' value='Please Added Service'  />
       </form>
        </div>
    );
};

export default AddService;
import React from 'react';

const MyReviewCard = ({review,reviewer,setReviewer}) => {
    const {description,image,user_email,user_name,_id,rating}=review
     
    const handleDelete=(_id)=>{
        const agree=window.confirm(`Are your sure delete this element ${_id}`)
        if(agree){
            fetch(`http://localhost:4000/review/${_id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                
                if(data.deletedCount > 0){
                    alert('Delete SuccessFully')
                    const remaining=reviewer.filter(re => re._id !== _id)
                    setReviewer(remaining)
                }
            })
        }
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
             <figure><img style={{height:'160px'}}  className='rounded-xl pl-5 w-full h-full' src={image}  alt=""/></figure>
             <div className="card-body">
               <h2 className="card-title">Name: {user_name}</h2>
               <h4 className="">Email: {user_email}</h4>
                <p>Description: {description}</p>
             <div className="card-actions justify-end">
             <button className="btn btn-warning font-bold" onClick={()=>handleDelete(_id)}>Delete</button>
             <button className="btn btn-warning font-bold">Update</button>
            </div>
         </div>
         </div>
        </div>
    );
};

export default MyReviewCard;
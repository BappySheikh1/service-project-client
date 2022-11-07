import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,description,image,price,rating,_id}=service
    // console.log(service);
    return (
        <div>
            <div style={{height:'550px'}} className="card card-compact bg-gray-200 shadow-xl p-5">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex justify-between items-center'>
    <p className='text-xl font-semibold'>Price: ${price}</p>
    <p className='text-xl font-semibold'>Rating: {rating.number}</p>
    </div>
    <p className='text-xl f'>
    {
            description?.length > 100 ?
            <>{description?.slice(0,100) + '...'}<Link to={`/service/${_id}`} className='text-xl font-bold text-blue-400'>Read More</Link></>
            :
            <>{description}</>
            }    
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;
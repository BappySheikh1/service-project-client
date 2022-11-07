import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const {title,description,image,price,rating,_id}=useLoaderData()
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
  <figure><img src={image} className='h-full w-full' alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p className='text-lg'>{description}</p>
    <br />
    <div className='flex justify-between items-center'>
       <p className="text-lg font-bold">Price: ${price}</p>
       <p className="text-lg font-bold">Rating: ${rating.number}</p>

    </div>
    <div className="card-actions justify-end">
     <Link to='/services'><button className="btn btn-primary">Go To Services page</button> </Link> 
    </div>
  </div>
            </div>
               {/* User Review */}
            <section>

            </section>
        </div>
    );
};

export default DetailsPage;
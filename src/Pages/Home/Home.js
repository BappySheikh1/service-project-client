import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from "./Banner/Banner";
import ServiceCard from './ServiceCard/ServiceCard';



const Home = () => {
    const services=useLoaderData()
    
    return (
        <div>
            <Banner />
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'> 
               {
                services.map((service) => <ServiceCard key={service._id} service={service}/>)
               }
            </div>
            <div className='text-center mb-11'>
           <Link to='/services'><button className="btn btn-outline btn-secondary font-bold "> See All  </button></Link> 
            </div>
        </div>
    );
};

export default Home;
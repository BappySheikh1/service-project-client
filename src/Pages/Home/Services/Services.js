import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServiceCardSummary from './ServiceCardSummary';

const Services = () => {
    useTitle('Service')
    const services=useLoaderData()
    return (
        <div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'> 
               {
                services.map((service) => <ServiceCardSummary key={service._id} service={service}/>)
               }
            </div>
        </div>
    );
};

export default Services;
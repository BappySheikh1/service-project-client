import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceCardSummary from './ServiceCardSummary';

const Services = () => {
    useTitle('Service')
    const [services,setServices]=useState([]);
    const [loadingService,setLoadingService]=useState(true)

   useEffect(()=>{
     fetch('https://service-project-server-bappysheikh1.vercel.app/services')
     .then(res => res.json())
     .then(data =>{
        // console.log(data)
        setServices(data)
        setLoadingService(false)
    })
   },[])



    return (
        <div>
            {
              loadingService ? 
              <div className='text-center my-20'>
                  <button className="btn loading">loading</button>
              </div>
            :
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'> 
               {
                services.map((service) => <ServiceCardSummary key={service._id} service={service}/>)
               }
            </div>
            }
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from "./Banner/Banner";
import ContractUs from './Contract/ContractUs';
import ServiceCard from './ServiceCard/ServiceCard';
import {  FaArrowRight } from 'react-icons/fa';
import BestCollection from './BestCollection/BestCollection';
import useTitle from '../../Hooks/useTitle';
import AboutUs from './About/AboutUs';
import Faq from './FAQ/Faq';
import BlogCard from '../Blogs/BlogCard';
import CheckoutService from './CheckoutService/CheckoutService';
import Feedback from './Testimonials/Feedback';

 

const Home = () => {
    // const services=useLoaderData()
   useTitle("Home")
   const [servicesLimit,setServicesLimit]=useState([])
  const [dataLoading,setDataLoading]=useState(true)
   useEffect(()=>{
    fetch('https://service-project-server-bappysheikh1.vercel.app/services/limit')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setServicesLimit(data)
        setDataLoading(false)
        
    })
   },[])
    return (
        <div>
          <Banner />

        {
            dataLoading ?

            <div className='text-center my-20'>
              <button className="btn loading">loading</button>
            </div>
            :
        <div>         
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'> 
               {
                servicesLimit.map((service) => <ServiceCard key={service._id} service={service}/>)
               }
            </div>
            <div className='text-center mb-11'>
           <Link to='/services'><button className="btn btn-outline btn-secondary font-bold "> See All  <FaArrowRight  className='ml-5 text-black '/></button></Link> 
            </div>
            <BestCollection />
        </div>
    }
           <AboutUs />
           <CheckoutService />
           <Feedback />
            <ContractUs />
            <BlogCard />
            <Faq/>
    </div>
    );
};

export default Home;
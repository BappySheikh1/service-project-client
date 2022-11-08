import React from 'react';
import img1 from '../../../assets/calendar-icon.png';
import img2 from '../../../assets/download (1).png';
import img3 from '../../../assets/location_icon.png'


const ContractUs = () => {
    return (
        <div className='w-full h-64 bg-black my-20 rounded-lg text-white flex justify-around flex-col md:flex-row items-center'>

            <div className='flex items-center'>           
             <div>
             <img className='mr-2' src={img1} style={{width:'40px'}} alt="" />
             </div>
              <div>
              <p>You can take service every day</p>
               <p className='text-xl font-bold'>6:00 am- 11:00pm</p>
              </div>
            </div>

            <div className='flex items-center'>
            <div>
            <img  src={img2} style={{width:'40px'}} className='rounded mr-2' alt="" />
            </div>
              <div>
              <p>My contact number?</p>
                <p className='text-xl font-bold'>+8801 223 22323</p>
              </div>
            </div>

            <div className='flex items-center'>
            <div>
            <img src={img3} style={{width:'40px'}} className='mr-2' alt="" />
            </div>
               <div>
               <p>My location </p>
               <p className='text-xl font-bold'>Narail Khulna ,Bangladesh</p>
               </div>
            </div>
        </div>
    );
};

export default ContractUs;
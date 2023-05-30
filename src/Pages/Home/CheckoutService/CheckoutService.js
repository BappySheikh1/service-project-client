import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { GiLuckyFisherman } from 'react-icons/gi';
import { GrDocumentPerformance } from 'react-icons/gr';


const CheckoutService = () => {
    return (
        <div className='my-10'>
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">OUR EXCLUSIVE SERVICES</p>
		    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">CHECK OUR SERVICES</h2>

            <div className='my-20 gap-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                   {/* Service -1 */}

                      <div className="card shadow-xl image-full">
                    <figure><img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/service/service1-1.jpg" alt="Shoes" className='w-full'/></figure>
                    <div className="card-body">
                     <span><FaCamera className='bg-orange-400 mb-5 text-gray-200 font-bold w-16 h-16 p-3 rounded-xl'/></span> 
                      <h2 className="card-title">REGULAR PHOTOGRAPHY</h2>
                      <p>Photography is way of feeling of touching of loving. What you have caught on film captured forever rememb little things.</p>
                      <div className="card-actions justify-start">
                        <button className=" underline">Read More</button>
                      </div>
                    </div>
                  </div>
                   {/* Service -2 */}

                      <div className="card shadow-xl image-full">
                    <figure><img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/service/service1-1.jpg" alt="Shoes" className='w-full'/></figure>
                    <div className="card-body">
                     <span><GiLuckyFisherman className='bg-orange-400 mb-5 text-gray-200 font-bold w-16 h-16 p-3 rounded-xl'/></span> 
                      <h2 className="card-title">PORTRAIT PHOTOGRAPHY</h2>
                      <p>Photography is way of feeling of touching of loving. What you have caught on film captured forever rememb little things.</p>
                      <div className="card-actions justify-start">
                        <button className=" underline">Read More</button>
                      </div>
                    </div>
                  </div>
                   {/* Service -3 */}

                      <div className="card shadow-xl image-full">
                    <figure><img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/service/service1-1.jpg" alt="Shoes" className='w-full'/></figure>
                    <div className="card-body">
                     <span><GrDocumentPerformance className='bg-orange-400 mb-5 text-gray-200 font-bold w-16 h-16 p-3 rounded-xl'/></span> 
                      <h2 className="card-title">PRODUCING IDEAS</h2>
                      <p>Photography is way of feeling of touching of loving. What you have caught on film captured forever rememb little things.</p>
                      <div className="card-actions justify-start">
                        <button className=" underline">Read More</button>
                      </div>
                    </div>
                  </div>
            </div>

        </div>
    );
};

export default CheckoutService;
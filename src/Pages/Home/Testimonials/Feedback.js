import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Feedback = () => {
    return (
        <div
         style={
            {
                backgroundImage: 'url("https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/bg/testimonial-1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
            }
    
         }
         className='h-[600] w-full text-white p-10'
        >
             
             <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">TESTIMONIALS</p>
	 	      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">CLIENTS FEEDBACKS</h2>

         <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="item1" className="flex flex-col w-full p-10 lg:p-20 text-center">
                        <p className="text-gray-300 text-center font-semibold mt-4">Photography is a way of felling, of touching, of loving. What you have caught on film is capture forever... is remembers little things after have forgotten everything. Wild life Photography powerful medium expression and communication, offers an infinite variety of perception, interpretation</p>

                        <div className=" mt-4">
                            <img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-1.jpg" className='rounded-xl mx-auto' alt="" />
                            <div className="ml-3 text-gray-300">
                                <h5 className="text-xl font-semibold">Olivia  Martin</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               {/* 2 */}
             <SwiperSlide>
                    <div id="item1" className="flex flex-col w-full p-10 lg:p-20 text-center">
                        <p className="text-gray-300 text-center font-semibold mt-4">Photography is a way of felling, of touching, of loving. What you have caught on film is capture forever... is remembers little things after have forgotten everything. Wild life Photography powerful medium expression and communication, offers an infinite variety of perception, interpretation</p>

                        <div className=" mt-4">
                            <img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-2.jpg" className='rounded-xl mx-auto' alt="" />
                            <div className="ml-3 text-gray-300">
                                <h5 className="text-xl font-semibold">Olivia  Martin</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

               {/* 3 */}
              <SwiperSlide>
                    <div id="item1" className="flex flex-col w-full p-10 lg:p-20 text-center">
                        <p className="text-gray-300 text-center font-semibold mt-4">Photography is a way of felling, of touching, of loving. What you have caught on film is capture forever... is remembers little things after have forgotten everything. Wild life Photography powerful medium expression and communication, offers an infinite variety of perception, interpretation</p>

                        <div className=" mt-4">
                            <img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/avatar/t-avatar-3.jpg" className='rounded-xl mx-auto' alt="" />
                            <div className="ml-3 text-gray-300">
                                <h5 className="text-xl font-semibold">Olivia  Martin</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Feedback;
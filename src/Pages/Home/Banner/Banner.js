import React from 'react';
import img1 from '../../../assets/banner/image/img1.jpg'
import img2 from '../../../assets/banner/image/img2.jpg'
import img3 from '../../../assets/banner/image/img3.jpg'
import img4 from '../../../assets/banner/image/img4.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
           <div className="carousel w-full mb-12 rounded-xl ">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="carousel-img">
    <img src={img1}  className="w-full" />
    </div>
    <div className="absolute flex items-center transform -translate-y-1/2 left-20  top-1/2">

       <h3 className='text-xl font-semibold text-gray-400 text-center text-justify'>
          Wildlife photography is a genre of <br /> photography  that records the life <br />of   animals in their  natural settings, <br />like is a forest or underwater.  So <br /> Wildlife photography often <br />  constitutes  the images of animals <br /> in movement or action such as <br /> eating,fighting, or in flight
          </h3>
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle border-none bg-green-600 hover:bg-green-900 ">❮</a> 
      <a href="#slide2" className="btn btn-circle border-none bg-red-600 hover:bg-red-800">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <div className="carousel-img">
    <img src={img2}  className="w-full" />
    </div>
    <div className="absolute flex items-center transform -translate-y-1/2 left-20  top-1/2">

<h3 className='text-xl font-semibold text-gray-400 text-center text-justify'>
   Wildlife photography is a genre of <br /> photography  that records the life <br />of   animals in their  natural settings, <br />like is a forest or underwater.  So <br /> Wildlife photography often <br />  constitutes  the images of animals <br /> in movement or action such as <br /> eating,fighting, or in flight
   </h3>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle border-none bg-green-600 hover:bg-green-900">❮</a> 
      <a href="#slide3" className="btn btn-circle border-none bg-red-600 hover:bg-red-800">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <div className="carousel-img">
    <img src={img3}  className="w-full" />
    </div>
    <div className="absolute flex items-center transform -translate-y-1/2 left-20  top-1/2">

<h3 className='text-xl font-semibold text-gray-400 text-center text-justify'>
   Wildlife photography is a genre of <br /> photography  that records the life <br />of   animals in their  natural settings, <br />like is a forest or underwater.  So <br /> Wildlife photography often <br />  constitutes  the images of animals <br /> in movement or action such as <br /> eating,fighting, or in flight
   </h3>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle border-none bg-green-600 hover:bg-green-900">❮</a> 
      <a href="#slide4" className="btn btn-circle border-none bg-red-600 hover:bg-red-800">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
    <div className="carousel-img">
    <img src={img4}  className="w-full" />
    </div>
    <div className="absolute flex items-center transform -translate-y-1/2 left-20  top-1/2">

       <h3 className='text-xl font-semibold text-gray-400 text-center text-justify'>
          Wildlife photography is a genre of <br /> photography  that records the life <br />of   animals in their  natural settings, <br />like is a forest or underwater.  So <br /> wildlife photography often <br />  constitutes  the images of animals <br /> in movement or action such as <br /> eating,fighting, or in flight
          </h3>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle border-none bg-green-600 hover:bg-green-900">❮</a> 
      <a href="#slide1" className="btn btn-circle border-none bg-red-600 hover:bg-red-800">❯</a>
    </div>
  </div>

           </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
             <div className="my-2">
  <div className="lg:flex items-center justify-center lg:justify-around">
    <img src="https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/section-img/about-1-1.jpg" className="mx-auto rounded-md" alt='' />
    <div className='lg:px-5 px-2 py-2'>
      <h3 className="text-xl font-bold">ABOUT US</h3>
      <h1 className='text-4xl my-2 font-semibold'>PHOTOGRAPHY IS GREAT</h1>
      <p className="py-2 text-xl">Photography is like a moment, an instant. You need a half-second to get the photo. So it's good to capture people when they are themselves.I became passionate about design filmmaking when I graduated from UCLA, and one of the things I always wanted to do was shoot really high quality film, so I got into time-lapse photography - so that means when you shoot a flower.</p>
      <button className="btn btn-primary my-2"><Link to="/contact">Contact Us</Link></button>
    </div>
  </div>
</div>

        </div>
    );
};

export default AboutUs;
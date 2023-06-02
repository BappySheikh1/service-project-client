import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
      <div>
        <h1 className="text-4xl text-center my-12 font-semibold">ABOUT US</h1>
        <div className="my-2">
          <div className="lg:flex items-center justify-center lg:justify-around lg:px-5">
            <img
              src="https://images.unsplash.com/photo-1605446994677-9b99e0d6647f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1282&q=80"
              className="mx-auto rounded-2xl lg:w-1/2 px-2"
              alt=""
            />
            <div className="lg:px-5 px-2 py-2">
              <h3 className="text-xl font-bold">ABOUT US</h3>
              <h1 className="text-4xl my-2 font-semibold">
                PHOTOGRAPHY IS GREAT
              </h1>
              <p className="py-2 text-xl">
                Photography is like a moment, an instant. You need a half-second
                to get the photo. So it's good to capture people when they are
                themselves.I became passionate about design filmmaking when I
                graduated from UCLA, and one of the things I always wanted to do
                was shoot really high quality film, so I got into time-lapse
                photography - so that means when you shoot a flower.
              </p>
              <button className="btn btn-primary my-2">
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
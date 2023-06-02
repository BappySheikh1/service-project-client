import React from 'react';
import {
  BsFacebook,
  BsFillCheckCircleFill,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

const BlogDetails = () => {
    return (
      <>
        <div className="grid lg:grid-cols-[4fr,2fr] gap-2 mt-5 px-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              className="w-full rounded"
              alt=""
            />
            <div className="flex items-center my-3">
              <img
                style={{ width: "100px" }}
                src="https://i.ibb.co/68v3PHm/avater.png"
                alt=""
              />
              <small>
                <span className="font-bold ">Tom Kaku</span> <br />
              </small>
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold my-3 mt-7 px-2">
                Traveling allows you to become so many different versions of
                yourself
              </h1>
              <p className="text-xl text-gray-700 px-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown to printer took a
                galley of type and scrambled it to make a type specimen book. It
                has that's survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-secondary font-bold my-3 mt-7 px-2 ">
                Travel makes one modest. You see what a tiny place you occupy in
                the world.
              </h1>
              <p className="text-xl text-gray-700 px-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown to printer took a
                galley of type and scrambled it to make a type specimen book. It
                has that's survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="my-10">
              <h2 className="text-xl text-gray-500 flex items-center">
                <BsFillCheckCircleFill className="text-primary mr-3" />
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h2>

              <h2 className="text-xl my-3 text-gray-500 flex items-center">
                <BsFillCheckCircleFill className="text-primary mr-3" />
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h2>

              <h2 className="text-xl text-gray-500 flex items-center">
                <BsFillCheckCircleFill className="text-primary mr-3" />
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h2>
            </div>
            {/* blog image */}
            <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <img
                  className="w-full"
                  src="https://themecrazy.net/html/tourest/img/blog/blog1.png"
                  alt=""
                />
                <div>
                  <p className="text-justify text-xl mt-5">
                    Lorem Ipsum is simply dummy text of the print and
                    typesetting industry lorem Ipsum has been the industry's
                    standard.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://themecrazy.net/html/tourest/img/blog/blog2.png"
                  alt=""
                />
                <div>
                  <p className="text-justify text-xl mt-5">
                    Lorem Ipsum is simply dummy text of the print and
                    typesetting industry lorem Ipsum has been the industry's
                    standard.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl text-justify mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown to printer took a
                galley of type and scrambled it to make.
              </p>
            </div>

            <div className="my-12 flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="text-xl font-bold">Tags:</h3>
                <div className="ml-5">
                  <button className="btn btn-xs btn-outline btn-primary ">
                    Tour
                  </button>
                  <button className="btn btn-xs btn-outline btn-primary mx-2">
                    Travel
                  </button>
                  <button className="btn btn-xs btn-outline btn-primary ">
                    Lifestyle
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <h3 className="text-xl font-bold">Share:</h3>
                <div className="ml-5">
                  <button className="btn btn-xs btn-outline btn-primary ">
                    <BsFacebook />
                  </button>
                  <button className="btn btn-xs btn-outline btn-primary mx-2">
                    <BsInstagram />
                  </button>
                  <button className="btn btn-xs btn-outline btn-primary ">
                    <BsLinkedin />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter--- 2 */}
          <div>
            {/* box-1 */}
            <div className="border rounded-md">
              <div className="py-6 pl-8 bg-[rgb(181,217,231)] rounded">
                <h2 className="text-2xl font-bold text-secondary">
                  Categories
                </h2>
              </div>
              <div className="py-3">
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>Trip & Tours</p>
                  <p>(18)</p>
                </div>
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>Traveling</p>
                  <p>(12)</p>
                </div>
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>National Parks</p>
                  <p>(13)</p>
                </div>
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>Adventures</p>
                  <p>(19)</p>
                </div>
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>Beaches and Sea</p>
                  <p>(25)</p>
                </div>
                <div className="flex items-center justify-between text-xl px-8 mb-3">
                  <p>Lifestyle</p>
                  <p>(21)</p>
                </div>
              </div>
            </div>
            {/* box-2 */}
            <div className="border rounded-md mt-10">
              <div className="py-6 pl-8 bg-[rgb(181,217,231)]">
                <h2 className="text-2xl font-bold text-secondary">
                  Recent Posts
                </h2>
              </div>
              {/* post-1 */}
              <div className="flex items-center justify-between mb-4 px-3">
                <div>
                  <img
                    src="https://themecrazy.net/html/tourest/img/blog/post1.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="flex items-center text-[#029E9D]">
                    <BiCalendar /> January 26, 2022
                  </p>
                  <h5 className="text-xl font-semibold text-secondary hover:text-[#029E9D]">
                    A journey of a thousand miles begins with a single step
                  </h5>
                </div>
              </div>
              {/* post-2 */}
              <div className="flex items-center justify-evenly mb-4 px-3">
                <div>
                  <img
                    src="https://themecrazy.net/html/tourest/img/blog/post2.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="flex items-center text-[#029E9D]">
                    <BiCalendar /> January 27, 2022
                  </p>
                  <h5 className="text-xl font-semibold text-secondary hover:text-[#029E9D]">
                    Travel makes one modest. You what a tiny place you occupy
                  </h5>
                </div>
              </div>
              {/* post-3 */}
              <div className="flex items-center justify-evenly mb-4 px-3">
                <div>
                  <img
                    src="https://themecrazy.net/html/tourest/img/blog/post3.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="flex items-center text-[#029E9D]">
                    <BiCalendar /> January 28, 2022
                  </p>
                  <h5 className="text-xl font-semibold text-secondary hover:text-[#029E9D]">
                    Traveling allows you to become so many different versions
                  </h5>
                </div>
              </div>
              {/* post-4 */}
              <div className="flex items-center justify-evenly mb-4 px-3">
                <div>
                  <img
                    src="https://themecrazy.net/html/tourest/img/blog/post4.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="flex items-center text-[#029E9D]">
                    <BiCalendar /> January 29, 2022
                  </p>
                  <h5 className="text-xl font-semibold text-secondary hover:text-[#029E9D]">
                    Travel is the only thing you buy that makes you richer
                  </h5>
                </div>
              </div>
              {/* post-4 */}
            </div>

            {/* Box-3 */}
            <div className="border rounded-md mt-10">
              <div className="py-5 pl-8 bg-[rgb(181,217,231)]">
                <h2 className="text-2xl font-bold text-secondary">
                  Popular Tag
                </h2>
              </div>

              <div className="py-5 px-10">
                <div className="">
                  <button className="btn btn-xs btn-primary ">Travel</button>
                  <button className="btn btn-xs btn-primary mx-4">Tour</button>
                  <button className="btn btn-xs btn-primary ">Adventure</button>
                </div>
                <div className="my-3">
                  <button className="btn btn-xs btn-primary ">Parks</button>
                  <button className="btn btn-xs btn-primary mx-4">Parks</button>
                  <button className="btn btn-xs btn-primary ">Lifestyle</button>
                </div>
                <div className="">
                  <button className="btn btn-xs btn-primary ">Tourisms</button>
                  <button className="btn btn-xs btn-primary mx-4">Beach</button>
                  <button className="btn btn-xs btn-primary ">Nature</button>
                </div>
              </div>
            </div>

            {/*box-4  */}
            <div className="border rounded-md mt-10">
              <div className="rounded-md shadow-md ">
                <img
                  src="https://themecrazy.net/html/tourest/img/blog/Black_Friday.png"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md  "
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default BlogDetails;
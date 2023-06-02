import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, description, image, price, rating, _id } = service;
  // console.log(service);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ height: "550px" }}
        className="card card-compact bg-gray-200 shadow-xl p-5"
      >
        <PhotoProvider>
          <PhotoView src={image}>
            <figure>
              <img src={image} alt="animel" />
            </figure>
          </PhotoView>
        </PhotoProvider>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Price: ${price}</p>
            <p className="text-xl font-semibold flex items-center">
              Rating: <FaStar className="text-yellow-400 mx-1" />{" "}
              {rating.number ? rating.number : rating}
            </p>
          </div>
          <p className="text-xl f">
            {description?.length > 100 ? (
              <>
                {description?.slice(0, 100) + "..."}
                <Link
                  to={`/detailspage/${_id}`}
                  className="text-xl font-bold text-blue-400"
                >
                  Read More
                </Link>
              </>
            ) : (
              <>{description}</>
            )}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/detailspage/${_id}`}>
              <button className="btn btn-primary">
                Details <FaArrowRight className="ml-5 font-bold text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

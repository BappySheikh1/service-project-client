import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CollectionCard = ({collection}) => {
    const {img,name,price}=collection
    // console.log(collection);
    return (
      <div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1500"
          className="card shadow-xl"
        >
          <PhotoProvider>
            <PhotoView src={img}>
              <figure className="px-10 pt-10">
                <img
                  src={img}
                  style={{ width: "303px", height: "200px" }}
                  alt="Shoes"
                  className="rounded-xl  bg-gray-400"
                />
              </figure>
            </PhotoView>
          </PhotoProvider>

          <div className="card-body items-center text-center">
            <p className="flex text-yellow-400">
              {" "}
              <FaStar /> <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title">{name}</h2>
            <p className="text-red-600 font-bold">${price}</p>
          </div>
        </div>
      </div>
    );
};

export default CollectionCard;
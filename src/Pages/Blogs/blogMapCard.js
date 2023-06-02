import React from 'react';
import { Link } from 'react-router-dom';

const BlogMapCard = ({blog}) => {
    return (
      <div>
        <div className="card  glass">
          <figure>
            <img src={blog.img} alt="car!" className="w-full" />
          </figure>
          <div className="p-2">
            <span className="font-semibold">
              <span className="text-orange-300">{blog.analysis}</span>
              <span className="text-gray-400"> / 19.02.2022</span>
            </span>

            <h2 className="text-2xl font-semibold my-2">{blog.name}</h2>
            <p>{blog.description}</p>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-primary">
                <Link to={`/blogs/${blog.id}`}>Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogMapCard;
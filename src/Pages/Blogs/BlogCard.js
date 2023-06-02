import React from 'react';
import BlogMapCard from './blogMapCard'

const BlogCard = () => {
    const blogData = [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        analysis: "Analysis",
        name: "Design is about poin view and there should be some sort.",
        description:
          "Photography is like a moment, an instant. You need a half-second to get the photo.",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1606831638312-15affe400c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        analysis: "Analysis",
        name: "Photography is very important part of my life.",
        description:
          "Photography is like a moment, an instant. You need a half-second to get the photo.",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1600174097100-3f347cf15996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        analysis: "Analysis",
        name: "Landscape photography is the supreme test photograph.",
        description:
          "Photography is like a moment, an instant. You need a half-second to get the photo.",
      },
    ];
    return (
        <div>
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">OUR BLOGS</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">GET NEW UPDATES</h2>
        
        <div className='my-20 gap-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                blogData.map((blog,i)=> <BlogMapCard key={i} blog={blog} />)
            }
        </div>
        </div>
    );
};

export default BlogCard;
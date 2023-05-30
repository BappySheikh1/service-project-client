import React from 'react';
import BlogMapCard from './blogMapCard'

const BlogCard = () => {
    const blogData =[
        {
            "img":"https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/blog/blog-1.jpg",
            "analysis": "Analysis",
            "name":"Design is about poin view and there should be some sort.",
            "description":"Photography is like a moment, an instant. You need a half-second to get the photo.",
        },
        {
            "img":"https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/blog/blog-2.jpg",
            "analysis": "Analysis",
            "name":"Photography is very important part of my life.",
            "description":"Photography is like a moment, an instant. You need a half-second to get the photo.",
        },
        {
            "img":"https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/blog/blog-3.jpg",
            "analysis": "Analysis",
            "name":"Landscape photography is the supreme test photograph.",
            "description":"Photography is like a moment, an instant. You need a half-second to get the photo.",
        },
    ]
    return (
        <div className='my-20 gap-4 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                blogData.map((blog,i)=> <BlogMapCard key={i} blog={blog} />)
            }
        </div>
    );
};

export default BlogCard;
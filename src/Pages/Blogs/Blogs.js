import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-4xl font-semibold'>Question-1: Difference between SQL and NoSQL</h3>
                   <p className='text-lg'>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                   <br />
                    SQL- <br />
                       - Relational Database management system <br />
                        -Vertically Scalable <br />
                        -Fixed or predifined Schema <br />
                        -Not suitable for hierarchical data storage <br />
                        -Can be used for complex queries <br />
                        
                    NOSQL- <br />
                       - Distributed Database management system <br />
                        -Horizontally Scalable <br />
                        -Dynamic Schema <br />
                        -Best suitable for hierarchical data storage <br />
                        -Not good for complex queries
                        

                   </p>
                </div>
            </div>
           
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-4xl font-semibold'>Question-2: What is JWT, and how does it work?</h3>
                   <p className='text-lg'>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.<br />
                   
                   </p>
                </div>
            </div>
           
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-4xl font-semibold'>Question-3: What is the difference between javascript and NodeJS?</h3>
                   <p className='text-lg'>Ans: <br />
                    javaScript -- <br />
                     1. Javascript is a programming language that is used for writing scripts on the website. <br />
                     2.Javascript can only be run in the browsers. <br />
                     3.It is basically used on the client-side. <br />
                     4.Javascript is capable enough to add HTML and play with the DOM. <br />
                     5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                     6. Javascript is used in frontend development. <br />
                     7.Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br />
                     8.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.  
                    <br />
                    NodeJS : <br />
                    1.NodeJS is a Javascript runtime environment. <br />
                    2.We can run Javascript outside the browser with the help of NodeJS. <br />
                    3.It is mostly used on the server-side. <br />
                    4.Nodejs does not have capability to add HTML tags. <br />\
                    5.V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                    6.Nodejs is used in server-side development. <br />
                    7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
                    <br /> 
                     8.Nodejs is written in C, C++ and Javascript.  
                   </p>
                </div>
            </div>
           
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-4xl font-semibold'>Question-4: How does NodeJS handle multiple requests at the same time?</h3>
                   <p className='text-lg'>Ans:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
           
           
        </div>
    );
};

export default Blogs;
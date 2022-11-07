import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const {title,description,image,price,rating,_id}=useLoaderData()
    return (
        <div>
            <h1>This is details page</h1>
        </div>
    );
};

export default DetailsPage;
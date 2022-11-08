import React, { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';

const BestCollection = () => {
    const [collections ,setcollections ]=useState([])
    useEffect(()=>{
      fetch('picture.json')
      .then(res => res.json())
      .then(data => setcollections(data))
    },[])

    return (
        <div className='text-center mb-10'>
            <h1 className='text-5xl font-bold'> Best Collection</h1>
            <p className='text-lg my-3'>You can also see these pictures are very beautiful</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24'>
                {
                    collections.map(collection  => <CollectionCard key={collection._id} collection={collection}/> )
                }
            </div>
        </div>
    );
};

export default BestCollection;
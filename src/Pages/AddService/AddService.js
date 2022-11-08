import React from 'react';
import useTitle from '../../Hooks/useTitle'

const AddService = () => {
    useTitle('Add Service')
    return (
        <div>
            <h2 className="text-4xl">This IS a Add Service Page</h2>
        </div>
    );
};

export default AddService;
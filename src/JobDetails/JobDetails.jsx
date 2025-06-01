import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title,company}=useLoaderData();

    return (
        <div className='text-center'>
            <h2 className='text-4xl text-purple-600 font-semibold'>{title}</h2>
            <p className='mt-5'>Company:{company}</p>
            <button className='btn btn-primary mt-5'>Apply now</button>
        </div>
    );
};

export default JobDetails;
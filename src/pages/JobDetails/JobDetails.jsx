import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title}=useLoaderData();
    // console.log(jobs);
    
    return (
        <div>
            <h2 className='text-center text-3xl'>{title}</h2>
        </div>
    );
};

export default JobDetails;
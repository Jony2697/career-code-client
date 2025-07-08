import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title, company, description, company_logo,applicationDeadline,hr_email } = useLoaderData();
    // console.log(jobs);

    return (
        <div>
            <div >
                <div className="card bg-base-100 w-96 mx-auto mt-20 mb-10 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={company_logo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-center">{title}</h2>
                        <p>Description : {description}</p>
                        <p>Company : {company}</p>
                        <p>Deadline : {applicationDeadline}</p>
                        <p>HR email : {hr_email}</p>
                        <div className="card-actions w-full">
                            <Link to={`/jobApply/${_id}`}>
                                <button className='btn btn-primary w-full'>Apply Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
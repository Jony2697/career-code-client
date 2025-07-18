import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const {_id, title, location, salaryRange, requirements, description, company, company_logo } = job;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm h-[350px] flex flex-col justify-between transform transition-transform duration-300  hover:scale-105 border border-gray-400 ">
                <div className='flex gap-2 p-3'>
                    <figure>
                        <img
                            src={company_logo}
                            width={50}
                            alt="company logo" />
                    </figure>
                    <div>
                        <h3 className='text-2xl'>{company}</h3>
                        <p className='flex items-center gap-2'><CiLocationOn /> {location}</p>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <p className='line-clamp-2'>{description}</p>
                    <div className="card-actions">
                        {
                            requirements.map((skills, index) => <div key={index} className="badge badge-outline">{skills}</div>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Job Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
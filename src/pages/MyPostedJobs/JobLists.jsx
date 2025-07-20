import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)
    
    return (
        <div >
            <h2 className="text-3xl text-center font-semibold text-amber-950 mt-10 mb-16">Jobs created by you:{jobs.length}</h2>

            <div className="overflow-x-auto bg-gray-100 rounded-xl mb-20">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>No.</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Application count</th>
                            <th>View applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job,index)=><tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td>{job.application_count}</td>
                            <td className='hover:text-cyan-700'><Link to={`/applications/${job._id}`}>View applications</Link></td>
                        </tr> )
                        }              
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobLists;
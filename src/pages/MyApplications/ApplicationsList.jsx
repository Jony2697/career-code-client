import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);

    return (
        <div className='mt-10 mb-10 p-4'>
            <h1 className='text-2xl text-center mb-6 font-semibold text-amber-900'>Application list :{applications.length}</h1>

            <div className="overflow-x-auto">
                <table className="table bg-gray-100 rounded-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Job Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        applications.map((application,index)=><JobApplicationRow key={application._id} index={index} application={application}></JobApplicationRow>)
                      }        
                       
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ApplicationsList;
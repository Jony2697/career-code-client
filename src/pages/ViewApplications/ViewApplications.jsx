import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">Application for:{applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select defaultValue={application.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
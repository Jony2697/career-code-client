import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user}=use(AuthContext);
    console.log(user);
    
    return (
        <div>
            <h2>my posted jobs</h2>
            <Suspense>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
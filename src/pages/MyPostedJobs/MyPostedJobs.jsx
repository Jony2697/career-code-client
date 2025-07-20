import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import Loading from '../Shared/Loading';

const MyPostedJobs = () => {
    const {user}=use(AuthContext);
    
    
    return (
        <div>
            
            <Suspense fallback={<Loading></Loading>}>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;
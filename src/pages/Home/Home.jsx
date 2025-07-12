import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import ApplicationsCountUp from '../MyApplications/ApplicationsCountUp';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={'Loading hot jobs'}>
                <HotJobs jobsPromise = {jobsPromise}></HotJobs>
            </Suspense>
            <ApplicationsCountUp></ApplicationsCountUp>
        </div>
    );
};

export default Home;
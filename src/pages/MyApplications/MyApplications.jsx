import React, { Suspense, use } from 'react';
import ApplicationsList from './ApplicationsList';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { myApplicationsPromise } from '../../api/applicationsApi';
import Loading from '../Shared/Loading';


const MyApplications = () => {
    const {user}=use(AuthContext);

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationsList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
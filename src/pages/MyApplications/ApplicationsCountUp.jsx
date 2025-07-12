import React from 'react';
import CountUp from 'react-countup';

const ApplicationsCountUp = () => {
    return (
        <div>
            <div className="text-center mb-10 mt-20">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Platform Stats</h1>
                <p className="mt-2 text-gray-600 text-lg">
                    See how many people are using our platform right now!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto text-center p-6">
                <div className="bg-green-700 text-white p-10 rounded-2xl shadow-md">
                    <h2 className="text-4xl font-bold">
                        <CountUp end={1500} duration={2} />
                    </h2>
                    <p className="mt-2 text-lg font-medium">Total Jobs</p>
                </div>

                <div className="bg-blue-700 text-white p-10 rounded-2xl shadow-md">
                    <h2 className="text-4xl font-bold">
                        <CountUp end={3200} duration={2} />
                    </h2>
                    <p className="mt-2 text-lg font-medium">Total Users</p>
                </div>

                <div className="bg-purple-700 text-white p-10 rounded-2xl shadow-md">
                    <h2 className="text-4xl font-bold">
                        <CountUp end={8900} duration={2} />
                    </h2>
                    <p className="mt-2 text-lg font-medium">Total Applications</p>
                </div>
            </div>
        </div>
    );
};

export default ApplicationsCountUp;
import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = use(AuthContext);
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        //Process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        
        //process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;


        // Process Responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(req => req.trim());
        // Status
        newJob.status = "active";
        

        console.log(newJob);

        //save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })



    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-400 via-black to-cyan-600 p-4">
            <form onSubmit={handleAddJob} className="w-full max-w-2xl bg-gray-200 shadow-xl rounded-2xl p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Post a New Job</h2>
                <hr />

                {/* Basic Info */}
                <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Info</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Job Title</label>
                            <input type="text" name="title" className="input input-bordered w-full" placeholder="Job Title" />
                        </div>
                        <div>
                            <label className="block font-medium">Company</label>
                            <input type="text" name="company" className="input input-bordered w-full" placeholder="Company Name" />
                        </div>
                        <div>
                            <label className="block font-medium">Location</label>
                            <input type="text" name="location" className="input input-bordered w-full" placeholder="Location" />
                        </div>
                        <div>
                            <label className="block font-medium">Company Logo URL</label>
                            <input type="text" name="company_logo" className="input input-bordered w-full" placeholder="Logo URL" />
                        </div>
                    </div>
                </fieldset>

                {/* Job Type */}
                <fieldset className="space-y-2">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">Job Type</legend>
                    <div className="filter w-full border border-gray-300 p-2 rounded-md">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" value={'On-site'} name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" value={'Remote'} name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" value={'Hybrid'} name="jobType" aria-label="Hybrid" />
                    </div>
                </fieldset>

                {/* Job Category */}
                <fieldset className="space-y-2">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">Job Category</legend>
                    <select name='category' className="select select-bordered w-full" defaultValue="">
                        <option value="" disabled >Choose Category</option>
                        <option value="Engineering">Design</option>
                        <option value="Web developer">Web developer</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </select>
                </fieldset>

                {/* Salary */}
                <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">Salary Range</legend>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-medium">Min Salary</label>
                            <input type="text" name="min" className="input input-bordered w-full" placeholder="e.g. 50000" />
                        </div>
                        <div>
                            <label className="block font-medium">Max Salary</label>
                            <input type="text" name="max" className="input input-bordered w-full" placeholder="e.g. 70000" />
                        </div>
                        <div>
                            <label className="block font-medium">Currency</label>
                            <select name="currency" className="select select-bordered w-full" defaultValue={'BDT'}>
                                <option disabled>Select Currency</option>
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Description & More */}
                {[
                    { label: "Job Description", name: "description", placeholder: "Enter job description..." },
                    { label: "Job Requirements", name: "requirements", placeholder: "Separate by commas..." },
                    { label: "Job Responsibilities", name: "responsibilities", placeholder: "Separate by commas..." }
                ].map(({ label, name, placeholder }) => (
                    <fieldset key={name} className="space-y-2">
                        <legend className="text-lg font-semibold text-gray-700 border-b pb-2">{label}</legend>
                        <textarea className="textarea textarea-bordered w-full" name={name} placeholder={placeholder}></textarea>
                    </fieldset>
                ))}

                {/* Deadline */}
                <fieldset className="space-y-2">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">Application Deadline</legend>
                    <input name='applicationDeadline' type="date" className="input input-bordered w-full" />
                </fieldset>

                {/* HR Info */}
                <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-700 border-b pb-2">HR Info</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">HR Name</label>
                            <input type="text" name="hr_name" className="input input-bordered w-full" placeholder="HR Name" />
                        </div>
                        <div>
                            <label className="block font-medium">HR Email</label>
                            <input type="email" name="hr_email" defaultValue={user.email} className="input input-bordered w-full" placeholder="HR Email" />
                        </div>
                    </div>
                </fieldset>

                {/* Submit */}
                <div className="text-center pt-4">
                    <input type="submit" className="btn btn-primary w-full" value="Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJob;
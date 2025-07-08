import React, { use } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = use(AuthContext);
    console.log(jobId, user);

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
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
        <div>
            <h1 className='text-center text-3xl font-semibold mt-10'>Apply job for:<Link to={`/jobs/${jobId}`}>Details</Link></h1>

            <form onSubmit={handleOnSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto mt-10 mb-10">

                    <label className="label">LinkedIn Link</label>
                    <input type="url" name='linkedIn' className="input" placeholder="LinkedIn Profile Link" />

                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Resume" />

                    <input type="submit" className='btn' value="Submit" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;
import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({jobsPromise}) => {

    const jobs=use(jobsPromise);
    return (
        <div>
           {
            jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
           }
            
        </div>
    );
};

export default HotJobs;
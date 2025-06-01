import React from 'react';
import htmlPic from '../assets/pics/html.jpg';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {title,location,jobType,category,salaryRange,description,company,requirements,_id}=job;
    // const navigate=useNavigate();
    return (
  <div>
   <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={htmlPic}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
    <h2 className="card-title font-bold text-xl">{title}</h2>
    <p className='font-semibold mb-4'><span className='text-purple-700'>Salary:</span> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
    <p className='font-semibold'>{location}</p> 
    <p className='bg-amber-200 px-4 py-2 rounded-lg font-semibold text-base'><span className='text-black font-semibold'>Job Type:</span> {jobType}</p>
    <p className='bg-green-200 px-4 py-2 rounded-lg font-semibold text-base'>{category}</p>
    <p className='font-semibold text-base'>{description}</p>
    <p className='text-xl font-semibold text-blue-600'>{company}</p>
     <div className="mt-4">
  <h3 className="font-semibold mb-2">Skills Required:</h3>
  <div className="flex flex-wrap gap-2">
    {Array.isArray(requirements) && requirements.map((skill, index) => (
      <div key={index} className="badge badge-outline">{skill}</div>
    ))}
  </div>
</div>

    <div className="card-actions justify-end">
      <Link to={`/jobs/${_id}`} className="btn btn-primary w-full">Show Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobCard;
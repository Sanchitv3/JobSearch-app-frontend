import React from 'react';
import JobCard2 from './JobCard2';

const JobData2 = ({ submittedData }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {submittedData && submittedData.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {submittedData.map((job) => (
            <JobCard2 key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <p>No submitted data</p>
      )}
    </div>
  );
};

export default JobData2;

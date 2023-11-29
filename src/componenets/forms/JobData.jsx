// import React from 'react';

// const JobData = ({ submittedData }) => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       {submittedData && submittedData.length > 0 ? (
//         <ul className="space-y-6">
//           {submittedData.map((job, index) => (
//             <li key={index} className="bg-white p-4 rounded-md shadow-md border-2 border-blue-500 mb-4">
//               <strong className="text-blue-500 text-lg">{job.title}</strong><br />
//               <div className="text-gray-700">
//                 <strong>Description:</strong> {job.description}<br />
//                 <strong>Requirements:</strong> {job.requirements}<br />
//                 <strong>Application Instructions:</strong> {job.applicationInstructions}<br />
//                 <strong>Company Name:</strong> {job.companyName}<br />
//                 <strong>Location:</strong> {job.location}<br />
//                 <strong>Salary Range:</strong> {job.salaryRange}<br />
//                 <strong>Employment Type:</strong> {job.employmentType}<br />
//                 <strong>Industry:</strong> {job.industry}<br />
//                 <strong>Company Description:</strong> {job.companyDescription}<br />
//                 <strong>Contact Email:</strong> {job.contactEmail}<br />
//                 <strong>Contact Phone:</strong> {job.contactPhone}<br />
//                 <strong>Application Deadline:</strong> {job.applicationDeadline}<br />
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No submitted data</p>
//       )}
//     </div>
//   );
// };

// export default JobData;

// import React from 'react';
// import JobCard from './JobCard';

// const JobData = ({ submittedData, onEditJob, editingJobId }) => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       {submittedData && submittedData.length > 0 ? (
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {submittedData.map((job) => (
//             <JobCard key={job._id} job={job} onEditJob={onEditJob} editingJobId={editingJobId} />
//           ))}
//         </div>
//       ) : (
//         <p>No submitted data</p>
//       )}
//     </div>
//   );
// };

// export default JobData;

// JobData.jsx

import React from 'react';
import JobCard from './JobCard';
const JobData = ({ submittedData, onEditJob, editingJobId }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {submittedData && submittedData.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {submittedData.map((job) => (
            <JobCard key={job._id} job={job} onEditJob={onEditJob} editingJobId={editingJobId} />
          ))}
        </div>
      ) : (
        <p>No submitted data</p>
      )}
    </div>
  );
};
export default JobData;

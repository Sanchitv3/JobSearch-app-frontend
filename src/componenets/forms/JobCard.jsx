// import React from 'react'

// const JobCard = () => {
//   return (
//     <div>
//   <div className="group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8">
//     <div className="mb-3 text-right">
//       <button className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="h-6 w-6"
//         >
//         </svg>
//       </button>
//     </div>
//     <div className="flex items-center gap-x-2">
//       <img
//         className="aspect-[2/2] w-16"
//         src="https://img.icons8.com/fluency/48/null/mac-os.png"
//         alt=""
//       />
//       <div>
//         <h3 className="text-xl font-bold text-gray-50">Apple</h3>   {/*companyName*/}
//         <span className="text-xs text-gray-300">New location, USA</span> {/*Location*/}
//       </div>
//     </div>
//     <div className="my-4">
//       <h3 className="text-2xl font-medium text-gray-200">UI/UX Designer</h3> {/*Title*/}
//       <div className="text-sm font-medium">
//         <span className="m-1 ml-0 inline-block text-blue-500">HTML</span>  {/*Requirements*/}
//         <span className="m-1 ml-0 inline-block text-yellow-500">CSS</span>
//         <span className="m-1 ml-0 inline-block text-pink-500">FIGMA</span>
//         <span className="m-1 ml-0 inline-block text-lime-500">Ad. XD</span> 
//         <span className="m-1 ml-0 inline-block text-blue-500">Illustrator</span>
//       </div>
//       <div className="mt-2 text-sm text-gray-400">$60K - $100K per year</div> {/*Salary Range*/}
//     </div>
//     <div className="flex items-center justify-between">
//       <span className="text-sm font-medium text-gray-50">Full Time</span> {/*Employement type*/}
//       <button className="font-medium text-blue-500 bg-red-600 transition-all duration-300 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10">
//         Apply Now
//       </button>
//     </div>
//   </div>
// </div>

//   )
// }

// export default JobCard
// import React from 'react';

// const JobCard = ({ job, onEditJob }) => {
//     const handleEditClick = () => {
//       onEditJob(job._id);
//     };
  
//     return (
//       <div className="group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8">
//         <div className="mb-3 text-right">
//           <button
//             onClick={handleEditClick}
//             className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"></svg>
//           </button>
//         </div>
//         <div className="flex items-center gap-x-2">
//           <img
//             className="aspect-[2/2] w-16"
//             src="https://img.icons8.com/fluency/48/null/mac-os.png"
//             alt=""
//           />
//           <div>
//             <h3 className="text-xl font-bold text-gray-50">{job.companyName}</h3>
//             <span className="text-xs text-gray-300">{job.location}</span>
//           </div>
//         </div>
//         <div className="my-4">
//           <h3 className="text-2xl font-medium text-gray-200">{job.title}</h3>
//           <div className="text-sm font-medium">
//             {Array.isArray(job.requirements) &&
//               job.requirements.map((requirement, index) => (
//                 <span key={index} className="m-1 ml-0 inline-block text-blue-500">
//                   {requirement}
//                 </span>
//               ))}
//           </div>
//           <div className="mt-2 text-sm text-gray-400">{job.salaryRange}</div>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-sm font-medium text-gray-50">{job.employmentType}</span>
//           <button className="font-medium text-blue-500 bg-red-600 transition-all duration-300 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10">
//             Edit
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default JobCard;
// JobCard.jsx
import React from 'react';

const JobCard = ({ job, onEditJob }) => {
  const handleEditClick = () => {
    onEditJob(job._id);
  };

  return(
    
    <div className="group bg-black p-4 transition-all duration-300 lg:p-8 mt-5 rounded-3xl hover:translate-y-5 hover:shadow-2xl">
      <div className="mb-3 text-right">
        <button
          onClick={handleEditClick}
          className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"></svg>
        </button>
      </div>
      <div className="flex items-center gap-x-2">
        <img
          className="aspect-[2/2] w-16 rounded-xl"
          src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-jobs-icon-for-your-project-png-image_1905202.jpg"
          alt="Company Logo"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-50">{job.companyName}</h3>
          <span className="text-xs text-gray-300">{job.location}</span>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-2xl font-medium text-gray-200">{job.title}</h3>
        <div className="text-sm font-medium">
          {Array.isArray(job.requirements) &&
            job.requirements.map((requirement, index) => (
              <span key={index} className="m-1 ml-0 inline-block text-blue-500">
                {requirement}
              </span>
            ))}
        </div>
        <div className="mt-2 text-sm text-gray-400">{job.salaryRange}</div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-50">{job.employmentType}</span>
        <button
          onClick={handleEditClick}
          className="font-medium text-blue-500 bg-red-600 transition-all duration-300 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10"
        >
          Edit
        </button>
      </div>
    </div>
    
  );
};

export default JobCard;

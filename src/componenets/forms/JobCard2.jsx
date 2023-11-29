import React from 'react';

const JobCard2 = ({ job, onEditJob }) => {
  const handleEditClick = () => {
    onEditJob(job._id);
  };
  const handleShareClick = async () => {
    try {
      console.log("button clicked")
      if (navigator.share) {
        await navigator.share({
          title: job.title,
          text: "Check out this job",
          url: window.location.href,
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      
    }
  };

  return (
    <div className="group bg-black p-4 transition-all rounded-3xl shadow-2xl duration-700 hover:translate-y-5 lg:p-8">
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
          className="aspect-[2/2] w-16 rounded-full bg-black border-black"
          src="https://w7.pngwing.com/pngs/633/817/png-transparent-application-for-employment-job-description-job-hunting-others-thumbnail.png"
          alt=""
        />
        <div>
          <h3 className="text-xl font-bold font-mono text-gray-50">{job.companyName}</h3>
          <span className="text-xs text-gray-300 font-mono">{job.location}</span>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-2xl font-medium text-gray-200 font-mono">{job.title}</h3>
        <div className="text-sm font-medium font-mono">
          {Array.isArray(job.requirements) &&
            job.requirements.map((requirement, index) => (
              <span key={index} className="m-1 ml-0 inline-block text-blue-500">
                {requirement}
              </span>
            ))}
        </div>
        <div className="mt-2 text-sm text-gray-400 font-mono">{job.salaryRange}</div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-50 font-mono">{job.employmentType}</span>

        <button className="font-medium text-blue-500 bg-red-600 transition-all duration-700 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10 mx-2">
          Apply Now
        </button>
        <button className="font-medium text-blue-500 bg-red-600 transition-all duration-700 hover:bg-blue-600 text-gray-50 rounded-full w-40 h-10 " onClick={handleShareClick}>
          share
        </button>
      </div>
    </div>
  );
};

export default JobCard2;

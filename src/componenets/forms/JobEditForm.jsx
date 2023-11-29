// // JobEditForm.jsx
// import React  from 'react';

// const JobEditForm = ({ editedJob, setEditedJob, onUpdateJob }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedJob((prevJob) => ({
//       ...prevJob,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
//     // Call the callback function to update the job in MongoDB
//     await onUpdateJob(editedJob);
//     // Perform any additional actions or state updates if needed
//   };

//   return (
//     <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] mx-auto my-10">
//       <div className="flex justify-end">
//         <button
//           onClick={() => setEditedJob(null)}
//           className="text-xl cursor-pointer focus:outline-none"
//         >
//           <ion-icon name="close-circle-outline"></ion-icon>
//         </button>
//       </div>
//       <form className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title:
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={editedJob.title}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={editedJob.description}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
//             Requirements:
//           </label>
//           <input
//             type="text"
//             id="requirements"
//             name="requirements"
//             value={editedJob.requirements}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationInstructions" className="block text-sm font-medium text-gray-700">
//             Application Instructions:
//           </label>
//           <textarea
//             id="applicationInstructions"
//             name="applicationInstructions"
//             value={editedJob.applicationInstructions}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//             Company Name:
//           </label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={editedJob.companyName}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Location:
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={editedJob.location}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
//             Salary Range:
//           </label>
//           <input
//             type="text"
//             id="salaryRange"
//             name="salaryRange"
//             value={editedJob.salaryRange}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
//             Employment Type:
//           </label>
//           <input
//             type="text"
//             id="employmentType"
//             name="employmentType"
//             value={editedJob.employmentType}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
//             Industry:
//           </label>
//           <input
//             type="text"
//             id="industry"
//             name="industry"
//             value={editedJob.industry}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
//             Company Description:
//           </label>
//           <textarea
//             id="companyDescription"
//             name="companyDescription"
//             value={editedJob.companyDescription}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
//             Contact Email:
//           </label>
//           <input
//             type="text"
//             id="contactEmail"
//             name="contactEmail"
//             value={editedJob.contactEmail}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
//             Contact Phone:
//           </label>
//           <input
//             type="text"
//             id="contactPhone"
//             name="contactPhone"
//             value={editedJob.contactPhone}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
//             Application Deadline:
//           </label>
//           <input
//             type="text"
//             id="applicationDeadline"
//             name="applicationDeadline"
//             value={editedJob.applicationDeadline}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <button
//           type="button"
//           onClick={handleUpdate}
//           className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobEditForm;

// JobEditForm.jsx

// import React from 'react';

// const JobEditForm = ({ formData, setFormData, onUpdateJob, onCancelEdit }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
//     // Call the callback function to update the job in MongoDB
//     await onUpdateJob(formData);
//     // Perform any additional actions or state updates if needed
//   };

//   return (
//     <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] mx-auto my-10">
//       <div className="flex justify-end">
//         <button
//           onClick={() => setEditedJob(null)}
//           className="text-xl cursor-pointer focus:outline-none"
//         >
//           <ion-icon name="close-circle-outline"></ion-icon>
//         </button>
//       </div>
//       <form className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title:
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={editedJob?.title || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>
//               <div>
//        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//              Description:
//            </label>
//          <textarea
//             id="description"
//             name="description"
//             value={editedJob.description}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//          <div>
//            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
//              Requirements:
//            </label>
//            <input
//             type="text"
//             id="requirements"
//             name="requirements"
//             value={editedJob.requirements}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationInstructions" className="block text-sm font-medium text-gray-700">
//             Application Instructions:
//           </label>
//           <textarea
//             id="applicationInstructions"
//             name="applicationInstructions"
//             value={editedJob.applicationInstructions}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//             Company Name:
//           </label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={editedJob.companyName}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//             Location:
//           </label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={editedJob.location}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
//             Salary Range:
//           </label>
//           <input
//             type="text"
//             id="salaryRange"
//             name="salaryRange"
//             value={editedJob.salaryRange}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
//             Employment Type:
//           </label>
//           <input
//             type="text"
//             id="employmentType"
//             name="employmentType"
//             value={editedJob.employmentType}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
//             Industry:
//           </label>
//           <input
//             type="text"
//             id="industry"
//             name="industry"
//             value={editedJob.industry}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
//             Company Description:
//           </label>
//           <textarea
//             id="companyDescription"
//             name="companyDescription"
//             value={editedJob.companyDescription}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
//             Contact Email:
//           </label>
//           <input
//             type="text"
//             id="contactEmail"
//             name="contactEmail"
//             value={editedJob.contactEmail}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
//             Contact Phone:
//           </label>
//           <input
//             type="text"
//             id="contactPhone"
//             name="contactPhone"
//             value={editedJob.contactPhone}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         <div>
//           <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
//             Application Deadline:
//           </label>
//           <input
//             type="text"
//             id="applicationDeadline"
//             name="applicationDeadline"
//             value={editedJob.applicationDeadline}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>

//         {/* ... other form fields ... */}

//         <button
//           type="button"
//           onClick={handleUpdate}
//           className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobEditForm;
// import React from 'react';

// const JobEditForm = ({ formData, setFormData, onUpdateJob, onCancelEdit }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// const handleUpdate = async () => {
//   // Ensure that formData has a valid _id property before calling onUpdateJob
//   if (formData._id) {
//     // Call the callback function to update the job in MongoDB
//     await onUpdateJob(formData);
//     // Perform any additional actions or state updates if needed
//   } else {
//     console.error('Error updating job: _id is undefined');
//   }
// };


//   return (
//     <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] mx-auto my-10">
//       <div className="flex justify-end">
//         <button
//           onClick={onCancelEdit}
//           className="text-xl cursor-pointer focus:outline-none"
//         >
//           <ion-icon name="close-circle-outline"></ion-icon>
//         </button>
//       </div>
//       <form className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title:
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title || ''}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>
//         {/* ... Other form fields ... */}
//         <button
//           type="button"
//           onClick={handleUpdate}
//           className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobEditForm;
import React from 'react';

const JobEditForm = ({ formData, setFormData, onUpdateJob, onCancelEdit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    
    if (formData._id) {
      await onUpdateJob(formData);
  
    } else {
      console.error('Error updating job: _id is undefined');
    }
  };

  return (
    <div className="job-container bg-gray-200 p-6 rounded-lg shadow-md w-[80%] mx-auto my-10">
      <div className="flex justify-end">
        <button
          onClick={onCancelEdit}
          className="text-xl cursor-pointer focus:outline-none"
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Requirements:
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements || ''}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="applicationInstructions" className="block text-sm font-medium text-gray-700">
            Application Instructions:
          </label>
          <textarea
            id="applicationInstructions"
            name="applicationInstructions"
            value={formData.applicationInstructions || ''}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
            Salary Range:
          </label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={formData.salaryRange || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
            Employment Type:
          </label>
          <input
            type="text"
            id="employmentType"
            name="employmentType"
            value={formData.employmentType || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry:
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
            Company Description:
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={formData.companyDescription || ''}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
            Contact Email:
          </label>
          <input
            type="text"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
            Contact Phone:
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
            Application Deadline:
          </label>
          <input
            type="text"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>


        <button
          type="button"
          onClick={handleUpdate}
          className="w-[200px] bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default JobEditForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const UploadResumePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('college', data.college);
    formData.append('degree', data.degree);
    formData.append('resume', data.resume[0]);

    try {
      const response = await fetch('http://localhost:3000/users/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Resume uploaded successfully');
        setTimeout(() => {
          navigate('/job-listings'); // Redirect to the Job Listings page
        }, 2000); // Delay to allow toast to be visible
      } else {
        toast.error('Upload failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      toast.error('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="py-6 md:py-12 bg-red-50"> {/* Reduced padding */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Upload Your Resume</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address"
                }
              })}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          {/* College */}
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College</label>
            <input
              {...register("college", { required: "College name is required" })}
              type="text"
              id="college"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your college name"
            />
            {errors.college && <p className="mt-1 text-xs text-red-500">{errors.college.message}</p>}
          </div>

          {/* Degree */}
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
            <input
              {...register("degree", { required: "Degree is required" })}
              type="text"
              id="degree"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your degree"
            />
            {errors.degree && <p className="mt-1 text-xs text-red-500">{errors.degree.message}</p>}
          </div>

          {/* Resume */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
            <input
              {...register("resume", { required: "Resume file is required" })}
              type="file"
              id="resume"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              accept=".pdf, .doc, .docx"
            />
            {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Upload Resume
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default UploadResumePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, FileText } from 'lucide-react';

const UserList = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('https://yourhr-assignment.vercel.app/users');
        setResumes(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleViewResume = (resumeUrl) => {
    window.open(resumeUrl, '_blank');
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="py-12 md:py-24 bg-red-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl lg:text-5xl">
            User Resumes
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 md:text-lg lg:text-xl">
            Explore our talented pool of candidates and their impressive resumes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div key={resume._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{resume.firstName} {resume.lastName}</h3>
                <p className="text-gray-600 mb-4">{resume.degree} from {resume.college}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {resume.email}</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> {resume.phone}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleViewResume(resume.resumeUrl)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 transition-colors"
                  >
                    <FileText className="mr-2" size={18} /> View Resume
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors">
                    <ArrowRight className="mr-2" size={18} /> Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

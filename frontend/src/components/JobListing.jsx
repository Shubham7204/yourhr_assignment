import React from 'react';
import { ArrowRight } from 'lucide-react';

const placeholderImage = "https://picsum.photos/200/300?random=1"; // Placeholder image URL

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        description: "Build and maintain user-facing features for our web applications.",
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "DevSolutions",
        description: "Develop server-side logic and APIs for our applications.",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        company: "WebWorks",
        description: "Work on both front-end and back-end technologies.",
    },
    {
        id: 4,
        title: "UI/UX Designer",
        company: "DesignPro",
        description: "Create engaging and user-friendly interfaces and experiences.",
    },
    {
        id: 5,
        title: "Data Scientist",
        company: "DataLab",
        description: "Analyze and interpret complex data to help us make informed decisions.",
    },
    {
        id: 6,
        title: "Product Manager",
        company: "ProductCo",
        description: "Lead product development and strategy.",
    },
    {
        id: 7,
        title: "Marketing Specialist",
        company: "MarketBuzz",
        description: "Develop and execute marketing strategies to promote our products.",
    },
    {
        id: 8,
        title: "HR Manager",
        company: "PeopleFirst",
        description: "Manage recruitment, employee relations, and other HR functions.",
    },
    {
        id: 9,
        title: "Content Writer",
        company: "WriteUp",
        description: "Create compelling and engaging content for various platforms.",
    },
];

const JobListings = () => {
    return (
        <div className="py-12 md:py-24 bg-red-50">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-6 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl lg:text-5xl">
                        Current Job Listings
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-700 md:text-lg lg:text-xl">
                        Explore our latest job openings and find the perfect role that matches your skills and aspirations.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img className="w-full h-48 object-cover object-center" src={placeholderImage} alt="Company Logo" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                                <p className="text-gray-600 mb-4">{job.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-800">{job.company}</span>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-700 transition-colors">
                                        <ArrowRight className="mr-2" /> Apply Now
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

export default JobListings;

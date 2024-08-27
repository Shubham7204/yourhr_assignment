import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Search, Upload } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-100 to-red-200 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4 z-10">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl xl:text-6xl">
                                        Find Your Dream Job Today
                                    </h1>
                                    <p className="max-w-[600px] text-black md:text-xl">
                                        Discover the best job opportunities and connect with top employers. Upload your resume and let the
                                        jobs find you.
                                    </p>
                                </div>
                                <div className="flex space-x-4">
                                    <Link
                                        to="/upload-resume"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Upload Resume
                                    </Link>
                                    <Link
                                        to="/job-listings"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Job Listings
                                    </Link>
                                </div>
                            </div>
                            <div className="relative lg:absolute lg:top-0 lg:right-0 w-full h-64 lg:h-full lg:w-1/2">
                                <div className="absolute inset-0 bg-gradient-to-t from-red-200 to-transparent lg:hidden"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Office workers collaborating"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
                                    Features That Make a Difference
                                </h2>
                                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our job portal offers a range of features to help you find the perfect job and connect with top
                                    employers.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Search className="h-12 w-12 text-red-600" />
                                <h3 className="text-xl font-bold text-black">Advanced Search</h3>
                                <p className="text-black">
                                    Easily search and filter job listings by location, job type, salary range, and more.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Upload className="h-12 w-12 text-red-600" />
                                <h3 className="text-xl font-bold text-black">Resume Builder</h3>
                                <p className="text-black">
                                    Create a professional resume with our easy-to-use resume builder tool.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Briefcase className="h-12 w-12 text-red-600" />
                                <h3 className="text-xl font-bold text-black">Job Alerts</h3>
                                <p className="text-black">
                                    Get notified about new job postings that match your preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
                                    What Our Customers Say
                                </h2>
                                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from real people who have found success using our job portal.
                                </p>
                            </div>
                            <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialCard key={index} {...testimonial} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
                    <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">
                                Ready to Find Your Dream Job?
                            </h2>
                            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Sign up now and start your job search with our powerful tools and features.
                            </p>
                        </div>
                        <div>
                            <Link
                                to="/get-started"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 disabled:pointer-events-none disabled:opacity-50"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

const TestimonialCard = ({ emoji, name, title, testimonial }) => {
    return (
        <div className="bg-red-50 p-6 shadow-sm rounded-lg">
            <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">{emoji}</div>
                <div>
                    <h4 className="text-lg font-medium text-black">{name}</h4>
                    <p className="text-sm text-black">{title}</p>
                </div>
            </div>
            <p className="mt-4 text-black">{testimonial}</p>
        </div>
    );
};

const testimonials = [
    {
        emoji: '🙂',
        name: 'Jane Doe',
        title: 'Software Engineer',
        testimonial: '"I found my dream job using this job portal. The search tools are amazing and the resume builder helped me create a professional-looking resume."',
    },
    {
        emoji: '😊',
        name: 'John Smith',
        title: 'Marketing Manager',
        testimonial: '"This job portal is a game-changer! The job alerts feature helped me find the perfect job opportunity that matched my skills and experience."',
    },
    {
        emoji: '😄',
        name: 'Sarah Lee',
        title: 'Business Analyst',
        testimonial: '"I was able to create a professional-looking resume using the resume builder tool, and it helped me stand out to employers. I highly recommend this job portal!"',
    },
];

export default LandingPage;
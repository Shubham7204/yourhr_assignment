import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import UploadResumePage from './components/UploadResumePage';
import JobListings from './components/JobListing';
import UserList from './components/UsersList';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="upload-resume" element={<UploadResumePage />} />
            <Route path="job-listings" element={<JobListings />} />
            <Route path="users" element={<UserList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
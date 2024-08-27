# YourHR Job Portal

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

YourHR is a modern job portal application designed to connect job seekers with potential employers. Built with React on the frontend and Node.js on the backend, it offers a seamless experience for browsing job listings, uploading resumes, and managing user profiles.

## Features

- 🏠 **Landing Page**: Engaging overview of platform features
- 💼 **Job Listings**: Browse current job openings
- 📄 **Resume Upload**: Easy-to-use resume submission system
- 👤 **User Profiles**: Manage and view user information
- 📱 **Responsive Design**: Optimized for both mobile and desktop

## Architecture

### Frontend

The frontend is built using React with Vite as the build tool and Tailwind CSS for styling.

Key Components:
- `LandingPage.jsx`: Main entry point
- `JobListings.jsx`: Displays job opportunities
- `UploadResumePage.jsx`: Handles resume uploads
- `UserList.jsx`: Shows uploaded resumes
- `Navbar.jsx` & `Footer.jsx`: Navigation components

### Backend

Powered by Node.js and Express, with MongoDB as the database and Cloudinary for file storage.

Key Components:
- `server.js`: Main server file
- `models/Resume.js`: MongoDB schema for resumes
- `routes/resumeRoutes.js`: API routes for resume operations

## Technology Stack

Frontend:
- React
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Axios

Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- Cloudinary
- Multer

`### Frontend Setup

1. **Clone the repository:**

   git clone https://github.com/Shubham7204/yourhr_assignment.git `

1.  **Navigate to the project directory:**

    `cd yourhr_assignment`

2.  **Install dependencies:**

    `npm install`

3.  **Start the development server:**

    `npm run dev`

4.  **Open <http://localhost:5173> in your browser**

### Backend Setup

1.  **Navigate to the backend directory:**

    `cd backend`

2.  **Install dependencies:**

    `npm install`

3.  **Create a `.env` file with the following content:**

    - `MONGODB_URI=your_mongodb_connection_string
    - CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    - CLOUDINARY_API_KEY=your_cloudinary_api_key
    - CLOUDINARY_API_SECRET=your_cloudinary_api_secret`

4.  **Start the server:**

    `npm start`

5.  **The server will run on <http://localhost:3000>**

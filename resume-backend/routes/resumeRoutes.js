const express = require('express');
const cloudinary = require('cloudinary').v2;
const Resume = require('../models/Resume');

module.exports = (upload) => {
    const router = express.Router();

    router.post('/upload', upload.single('resume'), async (req, res) => {
        try {
            const { firstName, lastName, email, phone, college, degree } = req.body;

            const result = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream({
                    resource_type: 'raw',
                    folder: 'yourhr', // Specify the folder where you want to store the PDFs
                    format: 'pdf',
                }, (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                });

                stream.end(req.file.buffer);
            });

            const newResume = new Resume({
                firstName,
                lastName,
                email,
                phone,
                college,
                degree,
                resumeUrl: result.secure_url, // Store the URL provided by Cloudinary
            });

            await newResume.save();
            res.status(201).json(newResume);
        } catch (error) {
            console.error('Upload error:', error);
            res.status(400).json({ error: error.message });
        }
    });

    router.get('/', async (req, res) => {
        try {
            const resumes = await Resume.find({});
            res.status(200).json(resumes);
        } catch (error) {
            console.error('Fetch error:', error);
            res.status(500).json({ error: 'Failed to fetch resumes' });
        }
    });

    return router;
};

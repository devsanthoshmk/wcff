const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const {sendMail} = require('./mail.js'); // Import the sendMail function
const fs = require('fs'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add new endpoint for applications that matches your frontend
app.post('/api/send-email', async (req, res) => {
  try {
    // Extract data from request body
    const { firstName, lastName, email, message } = req.body;
    
    // Validate form data
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Format the data for the sendMail function
    const name = `${firstName} ${lastName}`;
    const subject = 'New Contact Form Submission'; // Default subject since it's not in the form
    
    // Call the sendMail function with the formatted data
    const info = await sendMail({
      name,
      email,
      subject,
      message
    });
    
    // Send success response
    res.status(200).json({ 
      message: 'Email sent successfully',
      info: info 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Server error while sending email' });
  }
});

// Keep the original endpoint for backward compatibility
app.post('/api/send-email', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Call the sendMail function with the form data
    const info = await sendMail({
      name,
      email,
      subject,
      message
    });
    
    // Send success response
    res.status(200).json({ 
      message: 'Email sent successfully',
      info: info 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Server error while sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
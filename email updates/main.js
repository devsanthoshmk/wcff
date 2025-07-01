// send-followups.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { text } from 'stream/consumers';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

// 1) Configure your SMTP transporter (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "wcff.feedback@gmail.com",         // e.g. wcff.feedback@gmail.com
    pass: "dovq fkbi mqfb evxv"      
  }
});

// 2) Helper to send one mail
async function sendFollowUp({ name, email }) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirm Your WCFF Internship Enrollment',
    text: `Hello ${name},
  Thank you for your interest in the WCFF Internship!
  
  To confirm your enrollment and unlock access to all internship materials, please only pay for the certificate:
  
  Physical certificate: ₹299
  E‑certificate (PDF): ₹199
  Confirm & Pay Now here: https://wcff.in/internship/register/edit
  
  Once payment is complete, your internship will officially begin. 
  If you have any questions, feel free to reply to this email. 
  We'll contact you shortly after verifying your payment.
  
  Best regards,
  WCFF Internship Team
  wcff.feedback@gmail.com
    `,
    html: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap');
      </style>
      <div style="background-color: #eef4fb; padding: 24px; border-radius: 10px;
                  font-family: 'Unbounded', sans-serif; color: #1a1a1a;">
        <h2 style="color: #1d3557;">Hello ${name},</h2>
        <p>Thank you for your interest in the <strong>WCFF Internship</strong>!</p>
        <p>To confirm your enrollment and unlock access to all internship materials, please only pay for the certificate:</p>
        <ul>
          <li><strong>Physical certificate:</strong> ₹299</li>
          <li><strong>E‑certificate:</strong> ₹199</li>
        </ul>
        <p style="margin: 20px 0; text-align:center;">
          <a href="https://wcff.in/internship/register/edit"
             style="background-color:#1d3557; color:#ffffff;
                    padding:12px 20px; text-decoration:none; border-radius:6px;">
            Confirm & Pay Now
          </a>
        </p>
        <p>
          Once payment is complete, your internship will officially begin.<br>   
          If you have any questions, feel free to reply to this email.<br>
          We'll contact you shortly after verifying your payment.<br>
          If the above button doesn't work, please copy and paste the following link into your browser:<br>
          <a href="https://wcff.in/internship/register/edit">https://wcff.in/internship/register/edit</a>
        </p>
        <p style="margin-top:20px;">Best regards,<br>
           <strong style="color: #1d3557;">WCFF Internship Team</strong><br>
           <a href="mailto:wcff.feedback@gmail.com">
             wcff.feedback@gmail.com
           </a>
        </p>
      </div>
    `
  };
  

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✔️  Sent to ${email}: ${info.response}`);
  } catch (err) {
    console.error(`❌  Error sending to ${email}:`, err);
  }
}

// 3) Read and process CSV
const csvFile = path.resolve(__dirname, 'applications_rows.csv');

fs.createReadStream(csvFile)
  .pipe(csv())
  .on('data', (row) => {
    // row = { id, name, mobile_number, email, domain, available_period, mode, created_at }
    sendFollowUp({
      name: row.name,
      email: row.email
    });
  })
  .on('end', () => {
    console.log('All follow‑up emails queued.');
  })
  .on('error', (err) => {
    console.error('Error reading CSV:', err);
  });

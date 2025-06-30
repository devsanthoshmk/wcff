// send-followups.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

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
    from: "wcff.feedback@gmail.com",
    to: email,
      subject: 'Additional Information for Your WCFF Internship Application',
    text:`Hello ${name},
Thank you again for registering for the WCFF Internship. To complete your application, please reply to this email with your resume attached in "Name-College.pdf" format (for example, JaneDoe-InstituteOfTech.pdf).

We’ll review your materials and be in touch soon with next steps. If you have any questions, feel free to let us know.

Best regards,
WCFF Internship Team`,
    html: `
      <div style="background-color: #eef4fb; padding: 24px; border-radius: 10px; font-family: Arial, sans-serif; color: #1a1a1a;">
        <h2 style="color: #1d3557;">Hello ${name},</h2>
        <p>Thank you again for registering for the <strong>WCFF Internship</strong>. To complete your application, please reply to this email with your resume attached in <strong>"Name-College.pdf"</strong> format (for example, <code>JaneDoe-InstituteOfTech.pdf</code>).</p>
        <p>We’ll review your materials and be in touch soon with next steps. If you have any questions, feel free to let us know.</p>
        <p style="margin-top: 20px;">Best regards,<br><strong style="color: #1d3557;">WCFF Internship Team</strong><br><a href="mailto:wcff.feedback@gmail.com">wcff.feedback@gmail.com</a></p>
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

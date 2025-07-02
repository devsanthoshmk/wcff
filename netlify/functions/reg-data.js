import nodemailer from 'nodemailer'
import { createClient } from '@supabase/supabase-js'
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDAxMjYxNCwiZXhwIjoyMDU5NTg4NjE0fQ.6BOG1mtQ-NcJ_7g_p2kTq6di1aspmoOfFiiH6eXk2G0";
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);
// Create transporter using your Gmail account
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "wcff.feedback@gmail.com",       // wcff.feedback@gmail.com
    pass: "dovq fkbi mqfb evxv"   // your Gmail App Password
  }
})

// Helper to send mail
const sendMail = (options) => {
  const mailOptions = {
    from: "wcff.feedback@gmail.com",
    to: options.email, // rockyraghav45@gmail.com
    subject: `Thank You for Registering for the WCFF Internship`,
    replyTo: options.email,
      text: `
Hi ${options.name},

Thank you for registering for the WCFF Internship.

We’re currently reviewing your application and checking availability for the ${options.domain} domain during the ${options.available_period} period.

Please attach your resume (PDF) named in the format: ${options.name}-${options.college}.pdf

We’ll be in touch soon with further updates. We look forward to having you on board!

Best regards,
WCFF Internship Team
    `,
    html: `<div style="background-color: #eef4fb; padding: 24px; border-radius: 10px; font-family: Arial, sans-serif; color: #1a1a1a;">
  <h2 style="color: #1d3557;">Hello ${options.name},</h2>
  <p>Thank you for registering for the <strong>WCFF Internship</strong>.</p>
  <p>We’re currently reviewing your application and checking availability for the <strong>${options.domain}</strong> domain during the <strong>${options.available_period}</strong> period.</p>
  <p><strong>Please attach your resume (PDF) named as <code>name-college.pdf</code>.</strong></p>
  <p>We’ll be in touch soon with further updates. We look forward to having you on board!</p>
  <p>we'll also send you the payment receipt once it's verified.</p>
  <p style="margin-top: 20px;">Best regards,<br><strong style="color: #1d3557;">WCFF Internship Team</strong></p>
</div>

    `
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Email sending error:', err)
        reject(err)
      } else {
        console.log('Email sent successfully:', info.response)
        resolve(info)
      }
    })
  })
}

// Netlify Function entry point
export async function handler(event, context) {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }

    let payload, update_form, filename;
  try {
      console.log('Received event:', event);
     ({payload, update_form, filename} = JSON.parse(event.body));
    } catch {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON' })
      };
    }
  
    const {
      name,
      email,
      mobile_number,
      college,
      domain,
      department,
      available_period,
      mode,
      certificate_type,
      payment_screenshot,
  } = payload
  
  console.log('Received payload:', payload,);
  
    // Basic validation
    if (
      !name ||
      !email ||
      !mobile_number ||
      !college ||
      !domain ||
      !department ||
      !available_period ||
      !mode ||
      !certificate_type ||
      !payment_screenshot
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required.' })
      }
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }
  
    if (mode !== 'online' && mode !== 'offline') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Mode must be either "online" or "offline"' })
      };
    }
  
    let ismailed = false;
    try {
      await sendMail(payload);
      ismailed = true;
    } catch (err) {
      console.error("Email sending failed:", err);
      ismailed = false;
  }
  
  let data, error;
  if (update_form) {
    ({ data, error } = await supabase
      .from('applications')
      .upsert([payload], { onConflict: 'email' }));

  } else {
    ({ data, error } = await supabase
      .from('applications')
      .insert([payload]));
    
  }
  
  if (error) {
    if (filename!=='') {
        // Delete the file
        const { data, error } = await supabase.storage
        .from('payment-screenshot')
        .remove(filename);
        
        if (error) { console.error('Error deleting file:', error); }
      }
      return {
        statusCode: 500 ,
        body: JSON.stringify({ error: error.message || 'Database error' })
      };
    }
  
    if (!ismailed) {
      return {
        statusCode: 200,
        body: JSON.stringify({ error: 'Registration saved, but email failed.' })
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Registration and email successful.' })
    };
  }
  



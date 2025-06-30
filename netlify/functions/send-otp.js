import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';
const SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMTI2MTQsImV4cCI6MjA1OTU4ODYxNH0.yyszmKkxSM7I9DruWv-JruyR9wBfgHg2zAF7y1pnDUI';
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

export async function handler(event) {
  const { email } = JSON.parse(event.body);
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  // Upsert OTP (replace if already exists)
  const { error: insertError } = await supabase.from('otp').upsert({ email, otp }, { onConflict: 'email' });
  if (insertError) {
    console.error('Insert error:', insertError);
    return { statusCode: 500, body: JSON.stringify({ error: 'Supabase insert failed' }) };
  }
  


      // Clean up expired OTPs (> 5 min)
  // const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  // await supabase
  //   .from('otp')
  //   .delete()
  //   .lt('created_at', fiveMinAgo);

  
    // Send OTP email
    
    try {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "wcff.feedback@gmail.com",       // wcff.feedback@gmail.com
        pass: "dovq fkbi mqfb evxv"   // your Gmail App Password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for registering WCFF Internship',
    text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'OTP sent' }),
  };
  
    } catch (err) {
      console.error('Email sending error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' })
    }
  }
};

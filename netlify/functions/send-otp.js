import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDAxMjYxNCwiZXhwIjoyMDU5NTg4NjE0fQ.6BOG1mtQ-NcJ_7g_p2kTq6di1aspmoOfFiiH6eXk2G0";
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);
export async function handler(event) {
  const { email } = JSON.parse(event.body);
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('email', email)
    .single();

  console.log('Supabase select result:', data, error, email);

  if (data !== null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'You have already registered for this internship. You can edit or register again', isreal: true })
    };
  }
  const otp = Math.floor(1000 + Math.random() * 9000).toString();




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

      // Upsert OTP (replace if already exists)
  const { error: insertError } = await supabase.from('otp').upsert({ email, otp }, { onConflict: 'email' });
  if (insertError) {
    console.error('Insert error:', insertError);
    return { statusCode: 500, body: JSON.stringify({ error: 'Supabase insert failed' }) };
  }
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

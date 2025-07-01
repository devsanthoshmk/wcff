import { createClient } from '@supabase/supabase-js';
import { get } from '@vueuse/core';

const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDAxMjYxNCwiZXhwIjoyMDU5NTg4NjE0fQ.6BOG1mtQ-NcJ_7g_p2kTq6di1aspmoOfFiiH6eXk2G0";
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);

export async function handler(event) {
  try {
      const { email, otp, filename } = JSON.parse(event.body);
      console.log('Received email:', email, 'and OTP:', otp, "filename:", filename);

    const { data: record, error: selectError } = await supabase
      .from('otp')
      .select('otp, created_at')
      .eq('email', email)
          .single();
      console.log('Supabase select result:', record);

    if (selectError) {
      console.error('Select error:', selectError);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Supabase select failed' }),
      };
    }
    if (record.otp === null || record.otp === undefined) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'OTP not found' }),
      };
    }

    if (String(record.otp) !== otp ) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid or expired OTP' }),
        };
      }
      

    // Delete OTP after success
    //   await supabase.from('otp').delete().eq('email', email);
    
      getSignedUrl = await GetSignedUrl(filename);
      console.log('Supabase signed URL result:', getSignedUrl);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: getSignedUrl.statusCode === 200 ? true : false, url: getSignedUrl.body.url, filename: getSignedUrl.body.path }),
    };

  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  } finally {
    const error = await deleteOldRows();
    if (error) {
      sendMail({
        subject: 'FROM WCFF REG SERVER: Error in deleteOldRows function',
        email: 'connectwithsanthoshmk@gmail.com',
        message: `Error details: ${error.message}`
      });
    }
  }
}

GetSignedUrl = async (event) => {
    const filename = event;
    const bucket = 'payment-screenshot'
    const filePath = `${filename}`
  
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUploadUrl(filePath, 60) // 5 minutes expiry

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      }
    }
  
    return {
      statusCode: 200,
      body: {
        url: data.signedUrl,
        path: filePath
      }
    }
}
  

async function deleteOldRows() {
  const now = new Date();
  const fiveMinsAgo = new Date(now.getTime() - 5 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from('your_table')
    .delete()
    .lt('created_at', fiveMinsAgo); // created_at < 5 mins ago

  if (error) {
    console.error('Delete error:', error);
    return error
  } else {
    console.log('Deleted rows:', data);
  }
}
  

// Helper to send mail
const sendMail = (options) => {
  const mailOptions = {
    from: "wcff.feedback@gmail.com",
    to: "clientworkwcff@gmail.com", // rockyraghav45@gmail.com
    subject: `USER FEEDBACK: ${options.subject}`,
    replyTo: options.email,
    text: `
Name: ${options.name}
Email: ${options.email}
Subject: ${options.subject}

Message:
${options.message}
    `,
    html: `
      <h3>Contact-Us Form Submission</h3>
      <p><strong>Name:</strong> ${options.name}</p>
      <p><strong>Email:</strong> ${options.email}</p>
      <p><strong>Subject:</strong> ${options.subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${options.message.replace(/\n/g, '<br>')}
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
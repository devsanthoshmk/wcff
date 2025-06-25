// netlify/functions/send-feedback.mjs
import nodemailer from 'nodemailer'

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

// Netlify Function entry point
export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    }
  }

  let payload
  try {
    payload = JSON.parse(event.body)
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' })
    }
  }

  const { name, email, subject, message } = payload
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'All fields are required.' })
    }
  }

  try {
    await sendMail({ name, email, subject, message })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Feedback sent! 🎉' })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' })
    }
  }
}

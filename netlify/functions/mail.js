export async function handler(event, context) {
    try {
      const body = JSON.parse(event.body);
        
      const { name, email, subject, message } = body;
      // Basic validation (optional)
      if (!name || !email || !subject || !message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields' })
        };
      }
  
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': "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"  // Or hardcode temporarily if env var not set
        },
        body: JSON.stringify({
          sender: { name: 'Website Contact', email: 'sudo.mksantho.sh@gmail.com' },
          to: [{ email: 'clientworkwcff@gmail.com', name: 'Santhosh M K' }],
          replyTo: { email: email, name: name },
          subject:subject,
          htmlContent: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `
        })
      });
  
      if (!res.ok) {
        throw new Error(`Failed to send email: ${res.status}`);
      }
  
      const data = await res.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, messageId: data.messageId })
      };
    } catch (err) {
      console.error('Function error:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      };
    }
  }
  
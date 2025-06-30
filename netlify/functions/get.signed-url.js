const { createClient } = require('@supabase/supabase-js')
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDAxMjYxNCwiZXhwIjoyMDU5NTg4NjE0fQ.6BOG1mtQ-NcJ_7g_p2kTq6di1aspmoOfFiiH6eXk2G0";
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
)

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { filename, bucket } = JSON.parse(event.body)
  const filePath = `${filename}`

  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(filePath, 60) // 60 seconds expiry

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: data.signedUrl,
      path: filePath
    })
  }
}

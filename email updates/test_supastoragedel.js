
import { createClient } from '@supabase/supabase-js'

const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdxZGRrdHZhb2FkZWllY3BhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDAxMjYxNCwiZXhwIjoyMDU5NTg4NjE0fQ.6BOG1mtQ-NcJ_7g_p2kTq6di1aspmoOfFiiH6eXk2G0";
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co';

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);

const { data, error } = await supabase.storage
.from('payment-screenshot')
.remove([`physical-abcdmnmjec45@gmail.com.png`]);

if (error) { console.error('Error deleting file:', error); }
# Web Crafters Foundation web agency and internship portal

Web Crafters Foundation is a web agency website and student internship portal that presents commercial technology services, manages student program applications, verifies one-time passwords through email, and processes certificate payments.

The platform provides commercial services across web development, cybersecurity penetration testing, artificial intelligence consulting, and data science. It also runs a complete internship management system for students seeking hands-on industry experience. Students select from eight specialized tracks, verify their email addresses with a four-digit security code, upload payment confirmation records, and review existing registrations.

## Architecture

The project has three distinct parts:

- Client application: Single-page application built with Vue 3 Composition API, Vite 5, Tailwind CSS 3, and PrimeVue 3. Vue Router coordinates navigation across marketing pages and internship application workflows.
- Serverless backend: Netlify functions in the netlify/functions directory handle contact submissions, generate five-minute verification codes, validate submissions against Supabase, and upload payment screenshots to Supabase storage.
- Backend API server: Node.js and Express server in the server directory connects to PostgreSQL through connection pooling to store, update, and retrieve student records.

## Setup

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Netlify CLI for local serverless function execution
- Supabase account with storage bucket and database tables
- PostgreSQL database 14 or higher if running the Express server

### Installation

Clone the repository and install root frontend dependencies:

```bash
git clone https://github.com/devsanthoshmk/wcff.git
cd wcff
npm install
```

Install dependencies for the Express backend server:

```bash
cd server
npm install
cd ..
```

Install dependencies for the email update tool:

```bash
cd "email updates"
npm install
cd ..
```

## Usage

### Frontend development server

Start the Vite development server on port 5173:

```bash
npm run dev
```

### Netlify development server

Run the frontend and serverless functions together with Netlify CLI:

```bash
npx netlify dev
```

### Production build

Compile the frontend application for production deployment:

```bash
npm run build
```

The build command outputs production static assets to the dist directory. Preview the compiled build locally:

```bash
npm run preview
```

### Express backend server

Start the Express API server on port 3000:

```bash
cd server
npm start
```

Run the server with automatic file reload:

```bash
cd server
npm run dev
```

### Batch email script

Send followup notifications to applicants listed in applications_rows.csv:

```bash
cd "email updates"
node main.js
```

## Configuration

### Serverless functions environment

Set these environment variables in your Netlify dashboard or local environment file:

- SUPABASE_URL: Full URL of your Supabase instance.
- SUPABASE_SERVICE_ROLE_KEY: Service role key for admin access to database tables and storage.
- EMAIL_USER: Gmail account for sending verification codes and confirmations.
- EMAIL_PASS: Gmail application password for SMTP authentication.

### Express server environment

Create a .env file in the server directory with these settings:

- PORT: Server listening port, defaults to 3000.
- DATABASE_URL: PostgreSQL connection string with SSL configuration.
- email_app_pass: Gmail application password for notification emails.

### Database schema

Initialize PostgreSQL tables with the schema in server/schema.sql:

```bash
psql "$DATABASE_URL" -f server/schema.sql
```

The applications table stores the following columns:

- id: Serial integer primary key.
- name: Student full name.
- mobile_number: Contact telephone number.
- email: Unique student email address.
- domain: Selected track, including Web Development, Cybersecurity, Data Science, Artificial Intelligence, Video Editing, Cinematography, Filmmaking, or Content Creation.
- available_period: Selected date range for the internship.
- mode: Delivery mode, restricted to online or offline.
- created_at: Timestamp with default CURRENT_TIMESTAMP.

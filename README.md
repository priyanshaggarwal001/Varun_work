# Apex HR Consulting Website

A professional, fully-fledged HR consulting website for a USA-based company.

## Project Structure
- `/client`: React (Vite) + TypeScript + Vanilla CSS
- `/server`: Node.js + Express + TypeScript + Prisma (SQLite)

## Setup Instructions

### 1. Install Dependencies
Run this command from the root directory to install all necessary packages for both the frontend and backend:
```bash
npm run install-all
```

### 2. Configure Environment Variables
Open the `server/.env` file and update the following:
- `EMAIL_USER`: Your Gmail address.
- `EMAIL_PASS`: Your Gmail App Password (required for email notifications).
- `NOTIFICATION_EMAIL`: Where you want to receive the contact form emails.

### 3. Initialize Database
Go to the server directory and generate the database:
```bash
cd server
npx prisma migrate dev --name init
```

### 4. Run the Application
You can run both the client and server simultaneously from the root directory:
```bash
npm run dev
```

The website will be available at: `http://localhost:5173`
The API will be available at: `http://localhost:5001`

## Features
- **Modern UI:** Responsive design using Vanilla CSS.
- **Service Pages:** Detailed breakdown of HR consulting solutions.
- **Contact Form:** Saves inquiries to a local SQLite database.
- **Email Notifications:** Automatically sends new inquiries to your email inbox via Nodemailer.

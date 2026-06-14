import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email app password
  },
});

export const sendInquiryEmail = async (inquiryData: { name: string; email: string; subject: string; message: string }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Where you want to receive notifications
    subject: `New HR Inquiry: ${inquiryData.subject}`,
    text: `
      You have a new inquiry from your website:
      
      Name: ${inquiryData.name}
      Email: ${inquiryData.email}
      Subject: ${inquiryData.subject}
      
      Message:
      ${inquiryData.message}
    `,
    html: `
      <h3>New Website Inquiry</h3>
      <p><strong>Name:</strong> ${inquiryData.name}</p>
      <p><strong>Email:</strong> ${inquiryData.email}</p>
      <p><strong>Subject:</strong> ${inquiryData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiryData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

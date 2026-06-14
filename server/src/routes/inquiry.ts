import { Router } from 'express';
import { prisma } from '../db.js';
import { sendInquiryEmail } from '../utils/emailService.js';

const router = Router();

// Public: Submit inquiry
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: { name, email, subject, message }
    });

    // Send email notification (async - don't wait for it to finish before responding to user)
    sendInquiryEmail({ name, email, subject, message });

    res.status(201).json(inquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import inquiryRoutes from './routes/inquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'HR Consulting API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

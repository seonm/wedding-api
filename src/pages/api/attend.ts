import { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Schema, Document } from 'mongoose';
import { connectDB } from '../../../lib/mongodb';

interface AttendDocument extends Document {
  name: string;
  tel: string;
  boarding: string;
  direction: string;
}

const AttendSchema = new Schema<AttendDocument>({
  name: String,
  tel: String,
  boarding: String,
  direction: String,
});

const Attend =
  mongoose.models.Attend ||
  mongoose.model<AttendDocument>('Attend', AttendSchema);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    try {
      const { name, tel, boarding, direction } = req.body;

      const newAttend = await Attend.create({
        name,
        tel,
        boarding,
        direction,
      });

      await newAttend.save();

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      return res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
      return res.status(500).json({ error: `Failed to add user: ${error}` });
    }
  }

  // OPTIONS 요청 처리
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // 허용되지 않은 메서드에 대한 처리
  res.setHeader('Allow', ['POST', 'OPTIONS']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}

export default handler;

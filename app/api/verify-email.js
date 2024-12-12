// pages/api/verify-email.js
import { connectToDatabase } from '../../libs/mongodb';

export default async function handler(req, res) {
  const { token } = req.query;

  const { db } = await connectToDatabase();

  const user = await db.collection('users').findOne({
    verificationToken: token,
    verificationTokenExpiration: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired token.' });
  }

  await db.collection('users').updateOne(
    { _id: user._id },
    {
      $set: {
        verified: true,
        verificationToken: null,
        verificationTokenExpiration: null,
      },
    }
  );

  res.redirect('/login');
}

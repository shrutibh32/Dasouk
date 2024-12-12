import connectMongoDB from '@/libs/mongodb'; // Import your MongoDB connection function
import Users from '@/models/user'; // Import your User model
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectMongoDB(); // Ensure you're connected to MongoDB

  try {
    const userCount = await Users.aggregate([
      {
        $group: {
          _id: "$_id", // Group by the unique user identifier
          count: { $sum: 1 }
        }
      },
      {
        $count: "totalUsers" // Count the number of unique users
      }
    ]);
    console.log(userCount);
    const totalUsers = userCount.length > 0 ? userCount[0].totalUsers : 0;
    console.log(totalUsers);
    return NextResponse.json({ totalUsers });
  } catch (error) {
    console.error("Error fetching user count:", error);
    return NextResponse.json({ error: "Error fetching user count" }, { status: 500 });
  }
}

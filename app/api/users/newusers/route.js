import connectMongoDB from '@/libs/mongodb'; // Import your MongoDB connection function
import Users from '@/models/user'; // Import your User model
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectMongoDB(); // Ensure you're connected to MongoDB

  try {
    // Aggregate user data to count the number of users created each day of the week
    const userCounts = await Users.aggregate([
      {
        $project: {
          dayOfWeek: {
            $dateToString: { format: "%w", date: "$created_at" } // Extract the day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)
          }
        }
      },
      {
        $group: {
          _id: "$dayOfWeek",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 } // Sort by day of the week
      }
    ]);
    console.log(userCounts);
    // Map dayOfWeek numbers to actual day names
    const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    
    // Create an array of counts for each day of the week
    const countsByDay = daysOfWeek.map((day, index) => {
        const found = userCounts.find(item => item._id == (index + 1)); // Adjust for 1-based index
        return found ? found.count : 0;
      });
    console.log(countsByDay);
    return NextResponse.json({ daysOfWeek, countsByDay });
  } catch (error) {
    console.error("Error fetching user counts by day of the week:", error);
    return NextResponse.json({ error: "Error fetching user counts" }, { status: 500 });
  }
}

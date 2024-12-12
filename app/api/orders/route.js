import connectMongoDB from '@/libs/mongodb'; // Import your MongoDB connection function
import Order from '@/models/orders'; // Import your Order model
import {NextResponse } from 'next/server'
export async function GET(req) {
    await connectMongoDB();
  
    try {
      const weeklySales = await Order.aggregate([
        {
          $group: {
            _id: { $dayOfWeek: "$orderDate" },
            count: { $sum: 1 }
          }
        },
        {
          $sort: { "_id": 1 }
        }
      ]);
  
      // Initialize the full week data with zeros
      const fullWeekData = Array(7).fill(0);
  
      // Fill in the actual data where available
      weeklySales.forEach((dayData) => {
        const dayIndex = dayData._id - 1; // _id: 1 corresponds to Sunday
        fullWeekData[dayIndex] = dayData.count;
      });
  
      return NextResponse.json({ weeklySales: fullWeekData });
    } catch (error) {
      console.error("Error fetching weekly sales data:", error);
      return NextResponse.json({ error: "Error fetching weekly sales data" }, { status: 500 });
    }
  }
  
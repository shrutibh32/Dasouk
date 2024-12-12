import connectMongoDB from '@/libs/mongodb'; // Import your MongoDB connection function
import Order from '@/models/orders'; // Import your Order model
import { NextResponse } from 'next/server'; // Import NextResponse for handling responses

export async function GET(req) {
  await connectMongoDB(); // Ensure connection to MongoDB

  try {
    const orders = await Order.find(); // Fetch all orders from the database
    return NextResponse.json(orders); // Return the orders in a JSON response
  } catch (error) {
    console.error("Error fetching orders:", error); // Log any error that occurs
    return NextResponse.json(
      { error: "Failed to fetch orders" }, 
      { status: 500 } // Send a 500 error if something goes wrong
    );
  }
}

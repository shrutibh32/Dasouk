import connectMongoDB from "@/libs/mongodb";
import Order from "@/models/orders";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    customer_id,
    shop_id,
    order_date,
    total_amount,
    currency,
    order_status,
    payment_method,
    shipping_address,
  } = await request.json();

  await connectMongoDB();
  await Order.create({
    customer_id,
    shop_id,
    order_date,
    total_amount,
    currency,
    order_status,
    payment_method,
    shipping_address,
  });

  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const order = await Order.find();
  return NextResponse.json({ order });
}

export async function DELETE(request) {
  const {id} = await request.json();
  console.log(id)
  await connectMongoDB();
  await Order.findByIdAndDelete(id);
  return NextResponse.json({ message: "Order deleted" }, { status: 200 });
}

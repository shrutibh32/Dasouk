import connectMongoDB from "@/libs/mongodb";
import OrderItem from "@/models/orderitems";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    order_id,
    product_id,
    quantity,
    price,
    currency
  } = await request.json();

  await connectMongoDB();
  await OrderItem.create({
    order_id,
    product_id,
    quantity,
    price,
    currency
  });

  return NextResponse.json({ message: "OrderItem Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const product = await OrderItem.find();
  return NextResponse.json({ product });
}

export async function DELETE(request) {
  const {id} = await request.json();
  console.log(id)
  await connectMongoDB();
  await OrderItem.findByIdAndDelete(id);
  return NextResponse.json({ message: "OrderItem deleted" }, { status: 200 });
}

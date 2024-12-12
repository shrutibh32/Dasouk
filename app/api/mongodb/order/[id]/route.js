import connectMongoDB from "@/libs/mongodb";
import Order from "@/models/orders";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const item = await Order.find({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}
import connectMongoDB from "@/libs/mongodb";
import OrderItem from "@/models/orderitems";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const item = await OrderItem.find({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}
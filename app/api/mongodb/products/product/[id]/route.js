import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.find({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
}
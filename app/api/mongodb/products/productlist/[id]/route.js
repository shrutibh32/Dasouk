import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const products = await Product.find({ sid: id });
    return NextResponse.json({ products }, { status: 200 });
}
import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { sid } = params;
    await connectMongoDB();
    const categories = await Category.find({ sid: sid });
    return NextResponse.json({ categories }, { status: 200 });
}
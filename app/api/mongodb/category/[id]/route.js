import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const item = await Category.find({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}
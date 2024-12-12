import connectMongoDB from "@/libs/mongodb";
import Brand from "@/models/brand";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const item = await Brand.find({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}
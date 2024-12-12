import connectMongoDB from "@/libs/mongodb";
import Brand from "@/models/brand";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { sid } = params;
    await connectMongoDB();
    const brands = await Brand.find({ sid: sid });
    return NextResponse.json({ brands }, { status: 200 });
}
import connectMongoDB from "@/libs/mongodb";
import Customize from "@/models/customize";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { sid } = params;
    await connectMongoDB();
    const item = await Customize.find({ sid: sid });
    return NextResponse.json({ item }, { status: 200 });
}
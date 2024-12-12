import connectMongoDB from "@/libs/mongodb";
import Shops from "@/models/shop";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { uid } = params;
    await connectMongoDB();
    const shops = await Shops.find({ uid: uid });
    return NextResponse.json({ shops }, { status: 200 });
}
import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { gid } = params;
    await connectMongoDB();
    const user = await Users.findOne({ googleid: gid });
    return NextResponse.json({ user }, { status: 200 });
}
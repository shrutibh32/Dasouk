import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const {uid,googleid,username,email,phone,password,firstname,lastname,profilephoto,isverified,created_at,updated_at} = await request.json();
    await connectMongoDB();
    await Users.findByIdAndUpdate(id, {uid,googleid,username,email,phone,password,firstname,lastname,profilephoto,isverified,created_at,updated_at});
    return NextResponse.json({ message: "Users updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await Users.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}
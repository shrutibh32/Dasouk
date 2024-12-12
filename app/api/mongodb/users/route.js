import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { uid, googleid, githubid, facebookid, username, email, phone, password, firstname, lastname, profilephoto, isverified, created_at, updated_at, provider } = await request.json();
    await connectMongoDB();
    await Users.create({
        uid,
        googleid,
        githubid,
        facebookid,
        username,
        email,
        phone,
        password,
        firstname,
        lastname,
        profilephoto,
        isverified,
        created_at,
        updated_at,
        provider
    });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const users = await Users.find();
    return NextResponse.json({ users });
}

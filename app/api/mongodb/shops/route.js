import connectMongoDB from "@/libs/mongodb";
import Shops from "@/models/shop";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {sid,uid,shopname,shopport,website_url,shopdescription} = await request.json();
    await connectMongoDB();
    const result = await Shops.create({sid,uid,shopname,shopport,website_url,shopdescription});
    return NextResponse.json({ message: "Shop Created",result: result }, { status: 200 });
}

export async function GET() {
    await connectMongoDB();
    const shops = await Shops.find();
    return NextResponse.json({ shops });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Shops.findByIdAndDelete(id);
    return NextResponse.json({ message: "Shop deleted" }, { status: 200 });
  }
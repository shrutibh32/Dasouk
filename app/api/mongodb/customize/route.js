import connectMongoDB from "@/libs/mongodb";
import Customize from "@/models/customize";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {sid,shop,brand,contactUs} = await request.json();

  await connectMongoDB();
  await Customize.create({sid,shop,brand,contactUs});

  return NextResponse.json({ message: "Customize Created" }, { status: 201 });
}

export async function PUT(request) {
  const {_id,sid,shop,brand,contactUs} = await request.json();

  await connectMongoDB();
  await Customize.findOneAndUpdate({_id},{shop,brand,contactUs});
  return NextResponse.json({ message: "Customize Updated" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const customize = await Customize.find();
  return NextResponse.json({ customize });
}

export async function DELETE(request) {
  const {id} = await request.json();
  console.log(id)
  await connectMongoDB();
  await Customize.findByIdAndDelete(id);
  return NextResponse.json({ message: "Customize deleted" }, { status: 200 });
}

import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { sid, category_name } = await request.json();

  await connectMongoDB();
  await Category.create({
    sid,
    category_name,
  });

  return NextResponse.json({ message: "Category Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const category = await Category.find();
  return NextResponse.json({ category });
}

export async function DELETE(request) {
  const { id } = await request.json();
  console.log(id);
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted" }, { status: 200 });
}

export async function PUT(request) {
  const { _id, sid, category_name } = await request.json();

  await connectMongoDB();
  await Category.findOneAndUpdate(
    { _id },
    {
      sid,
      category_name,
    }
  );
  return NextResponse.json({ message: "Product Updated" }, { status: 201 });
}

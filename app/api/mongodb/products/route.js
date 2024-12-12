
import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    sid,
    name,
    description,
    category_id,
    brand_id,
    price,
    currency,
    stock_level,
    image_url,
    additional_images,
  } = await request.json();

  await connectMongoDB();
  await Product.create({
    sid,
    name,
    description,
    category_id,
    brand_id,
    price,
    currency,
    stock_level,
    image_url,
    additional_images,
  });

  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function PUT(request) {
  const {
    _id,
    sid,
    name,
    description,
    category_id,
    brand_id,
    price,
    currency,
    stock_level,
    image_url,
    additional_images,
  } = await request.json();

  await connectMongoDB();
  await Product.findOneAndUpdate(
    { _id },
    {
      sid,
      name,
      description,
      category_id,
      brand_id,
      price,
      currency,
      stock_level,
      image_url,
      additional_images,
    }
  );
  return NextResponse.json({ message: "Product Updated" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const product = await Product.find();
  return NextResponse.json({ product });
}

export async function DELETE(request) {
  const { id } = await request.json();
  console.log(id);
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

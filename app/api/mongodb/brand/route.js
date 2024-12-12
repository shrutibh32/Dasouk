import connectMongoDB from "@/libs/mongodb";
import Brand from "@/models/brand";
import { NextResponse } from "next/server";

// POST: Create a new brand
export async function POST(request) {
  const { sid, brand_name } = await request.json();

  await connectMongoDB();
  await Brand.create({ sid, brand_name });

  return NextResponse.json({ message: "Brand Created" }, { status: 201 });
}

// PUT: Update an existing brand
export async function PUT(request) {
  const { _id, sid, brand_name } = await request.json();

  await connectMongoDB();

  try {
    const result = await Brand.findOneAndUpdate(
      { _id, sid },
      { brand_name },
      { new: true }
    );

    if (!result) {
      return NextResponse.json({ message: "Brand not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Brand Updated", brand: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json(
      { error: "Error updating brand" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all brands for a specific shop
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shopId = searchParams.get("shopId"); // Get the shopId from query params

  await connectMongoDB();

  // Fetch the brands using the shopId (sid)
  const brands = await Brand.find({ sid: shopId });

  if (brands.length === 0) {
    return NextResponse.json({ message: "No brands found" }, { status: 404 });
  }

  return NextResponse.json({ brands }, { status: 200 });
}

// DELETE: Delete a brand
export async function DELETE(request) {
  const { id } = await request.json();

  await connectMongoDB();
  const result = await Brand.findByIdAndDelete(id);

  if (!result) {
    return NextResponse.json({ message: "Brand not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Brand Deleted" }, { status: 200 });
}

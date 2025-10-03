import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.longurl || !body.shorturl) {
      return NextResponse.json(
        { message: "Missing fields", success: false, error: true },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("URL-Shortner");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json(
        { message: "URL already exists", success: false, error: true },
        { status: 409 }
      );
    }

    await collection.insertOne({
      longurl: body.longurl,
      shorturl: body.shorturl,
    });

    return NextResponse.json(
      { message: "URL generated successfully!", success: true, error: false },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/generate error:", err);
    return NextResponse.json(
      { message: "Server error", success: false, error: true },
      { status: 500 }
    );
  }
}

import clientPromise from "@/lib/mongodb";
import { connection } from "next/server";

export async function POST(request){
    const body = await request.json()

    const client = await clientPromise;
    const db = client.db("URL-Shortner");
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({shorturl: body.shorturl})
    if (doc){
        return Response.json({message: "URL already exists", success: "false", error: "true", })
    }

    const result = await collection.insertOne({
        longurl: body.longurl,
        shorturl: body.shorturl
    })

    return Response.json({message: "URL generated successfully!", success: "true", error: "false", })
}
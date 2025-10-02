import clientPromise from "@/lib/mongodb";

export async function POST(request){
    const body = request.json()

    const client = await clientPromise;
    const db = client.db("URL-Shortner");
    const collection = db.collection("url")

    // Check if the short url exists
    

    const result = await collection.insertOne({
        longurl: body.longurl,
        shorturl: body.shorturl
    })

    return Response.json({message: "Finished Processing", success: "true", error: "false", })
}
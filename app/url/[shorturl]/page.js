import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const { shorturl } = await params
  
    const client = await clientPromise;
    const db = client.db("URL-Shortner");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({shorturl: shorturl})
    if (doc){
        redirect(doc.longurl)
    }
    else{
        return <div className="text-center">URL Doesnt exist</div>
    }

}
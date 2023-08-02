import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://ismail6119050it:UhxRGWqBQEh2@cluster0.xkzbbp3.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data added" });
  }
}
export default handler;

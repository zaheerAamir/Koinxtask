import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {

  try {

    const URI = process.env.URI;
    if (URI != undefined) {
      console.log(URI);
      await mongoose.connect(URI);
    }

  } catch (err) {

    console.error('[User UTIIL] Error connecting to MongoDB:', err);

  }

}

export default connectDB;

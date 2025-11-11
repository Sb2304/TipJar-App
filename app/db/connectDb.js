import mongoose from "mongoose";

const connectDb = async () => {
  // Check if we have a connection to the database
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDb;
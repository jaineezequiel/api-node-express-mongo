import mongoose from "mongoose";

async function connectDatabase() {
        mongoose.connect("mongodb+srv://jaineezequiel:huUoS8YNJCXzBZr9@jainecluster.8vyer4f.mongodb.net/"
        +"loja?retryWrites=true&w=majority&appName=JaineCluster");

        return mongoose.connection;
}

export default connectDatabase;
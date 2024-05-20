import mongoose from "mongoose";

async function connectDatabase() {
        mongoose.connect(DB_CONNECTION_STRING);

        return mongoose.connection;
}

export default connectDatabase;
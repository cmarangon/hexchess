import { Nitro } from "nitropack";
import mongoose from "mongoose";


export default async (_nitroApp: Nitro) => {
    console.log("Nitro is ready!");

    const config = useRuntimeConfig();

    try {
        await mongoose.connect(config.mongodbUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};

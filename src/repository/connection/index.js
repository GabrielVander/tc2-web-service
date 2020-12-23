import mongoose from "mongoose";
import {databaseName, databasePassword, databaseUsername} from "../../env";

export function initializeMongoose() {
    const connectionString = `mongodb+srv://${databaseUsername}:${databasePassword}@cluster0.gzbz1.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(value => {
            console.log(`Successfully connected to ${value.connection.host}`);
            mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
        })
        .catch(reason => {
            console.error(`Couldn't connect to database: ${reason}`);
        });
}

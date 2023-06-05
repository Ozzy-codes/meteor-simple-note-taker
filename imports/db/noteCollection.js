import { Mongo } from 'meteor/mongo'

export const NotesCollection = new Mongo.Collection('notes')

// process.env.MONGO_URL = mongoURL;
// YourCollection._connection = YourCollection.connect(mongoURL);

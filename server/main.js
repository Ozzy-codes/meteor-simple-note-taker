import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';
import { NotesCollection } from '../imports/db/noteCollection'

import '../imports/api/noteMethods'
import '../imports/api/notesPublications'

const insertNote = (title, body) =>
  NotesCollection.insert({
    noteTitle: title,
    noteBody: body,
    createdAt: new Date()
  })

Meteor.startup(() => {
  
  const url = Meteor.settings.mongo.url;

  if (url) {
    const db = new MongoInternals.RemoteCollectionDriver(url);
    NotesCollection = new Mongo.Collection('NotesCollection', { _driver: db });
  };

  if (NotesCollection.find().count() === 0) {

    [
      { title: 'first note', body: 'This is the body for the first note' },
      { title: 'second note', body: 'This is the body for the second note' },
      { title: 'third note', body: 'This is the body for the third note' },
      { title: 'fourth note', body: 'This is the body for the fourth note' }
    ].forEach(note => insertNote(note.title, note.body))
  
  }

});


import { Meteor } from 'meteor/meteor';
import { NotesCollection } from '../imports/db/noteCollection'

import '../imports/api/noteMethods';

const insertNote = (title, body) =>
  NotesCollection.insert({
    noteTitle: title,
    noteBody: body,
    createdAt: new Date(),
  });

Meteor.startup(() => {
  if (NotesCollection.find().count() === 0) {
    [
      {title: 'first note', body: 'This is the body for the first note'},
      {title: 'second note', body: 'This is the body for the second note'},
      {title: 'third note', body: 'This is the body for the third note'},
      {title: 'fourth note', body: 'This is the body for the fourth note'},
    ].forEach(note => insertNote(note.title, note.body))
  }
});

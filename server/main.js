import { Meteor } from 'meteor/meteor';
import { NotesCollection } from '../imports/db/noteCollection'

import '../imports/api/noteMethods';

const insertNote = (title) =>
  NotesCollection.insert({
    noteTitle: title,
    createdAt: new Date(),
  });

Meteor.startup(() => {
  if (NotesCollection.find().count() === 0) {
    [
      'first note',
      'second note',
      'third note',
      'fourth note',
    ].forEach(title => insertNote(title))
  }
});

import { Meteor } from 'meteor/meteor'
import { NotesCollection } from '../db/noteCollection'

Meteor.publish('notes', function () {
  const insertNote = (title, body) => {
    const userEmail = Meteor.users.findOne(this.userId).emails[0].address

    NotesCollection.insert({
      noteTitle: title,
      noteBody: body,
      createdAt: new Date(),
      userId: this.userId,
      userEmail
    })
  }
  if (NotesCollection.find({ userId: this.userId }).count() === 0) {
    [
      { title: 'first note', body: 'This is the body for the first note' },
      { title: 'second note', body: 'This is the body for the second note' },
      { title: 'third note', body: 'This is the body for the third note' },
      { title: 'fourth note', body: 'This is the body for the fourth note' }
    ].forEach(note => insertNote(note.title, note.body))
  }
  return NotesCollection.find({ userId: this.userId }, { sort: { createdAt: -1 } })
})

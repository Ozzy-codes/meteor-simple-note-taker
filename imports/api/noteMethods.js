import { Meteor } from 'meteor/meteor'
import { NotesCollection } from '../db/noteCollection'
import { check } from 'meteor/check'

Meteor.methods({
  'notes.insert' (title, body) {
    check(title, String)
    check(body, String)

    if (!this.userId) {
      throw new Meteor.Error('Not authorized')
    }
    const userEmail = Meteor.users.findOne(this.userId).emails[0].address

    NotesCollection.insert({
      noteTitle: title,
      noteBody: body,
      createdAt: new Date(),
      userId: this.userId,
      userEmail
    })
  },
  'notes.remove' (noteId) {
    check(noteId, String)

    if (!this.userId) {
      throw new Meteor.Error('Not authorized')
    }
    NotesCollection.remove(noteId)
  },
  'notes.update' (noteId, newTitle, newBody) {
    check(noteId, String)
    check(newTitle, String)
    check(newBody, String)

    if (!this.userId) {
      throw new Meteor.Error('Not authorized')
    }
    NotesCollection.update({ _id: noteId }, {
      $set: {
        noteTitle: newTitle,
        noteBody: newBody
      }
    })
  }
})

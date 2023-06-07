import { Meteor } from 'meteor/meteor'
import { NotesCollection } from '../db/noteCollection'

Meteor.publish('notes', function () {
  return NotesCollection.find({ userId: this.userId }, { sort: { createdAt: -1 } })
})

import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { NotesCollection } from '../db/noteCollection'

import './App.html'
import './note.js'
import './newNoteForm'

Template.mainContainer.onCreated(function () {
  this.subscribe('notes')
})
Template.mainContainer.helpers({
  notes() {
    return NotesCollection.find({}, { sort: { createdAt: -1 } })
  },
  moveLogin() {
    return Meteor.user() ? 'text-right' : ' '
  },
  moveLoginArgument() {
    return Meteor.user() ? 'right' : ' '
  }
})

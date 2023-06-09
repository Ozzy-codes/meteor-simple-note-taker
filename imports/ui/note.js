import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import './note.html'

Template.note.onCreated(function () {
  this.expand = new ReactiveVar(false)
  this.editMode = new ReactiveVar(false)
})
Template.note.events({
  'click #individualNote' (event, instance) {
    instance.expand.set(!instance.expand.get())
  },
  'click #editNote' (event, instance) {
    instance.editMode.set(!instance.editMode.get())
  },
  'click #delete' (event, instance) {
    if (confirm('Are you sure you want to permanently remove your note?')) {
      Meteor.call('notes.remove', this._id, this.userId)
    }
  },
  'submit #updateNoteForm' (event, instance) {
    event.preventDefault()

    const newTitle = event.target.noteTitle.value
    const newBody = event.target.noteBody.value

    Meteor.call('notes.update', this._id, this.userId, newTitle, newBody)

    instance.editMode.set(!instance.editMode.get())
  },
  'click #cancelUpdate' (event, instance) {
    instance.editMode.set(!instance.editMode.get())
  }
})
Template.note.helpers({
  expand: function () {
    return Template.instance().expand.get()
  },
  editMode: function () {
    return Template.instance().editMode.get()
  },
  title () {
    console.log(this)
    return this.title
  }
})

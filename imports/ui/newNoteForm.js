import { Template } from "meteor/templating";
import { NotesCollection } from "../db/noteCollection";
import { ReactiveVar } from 'meteor/reactive-var';

import './newNoteForm.html';

Template.newNoteForm.onCreated(function() {
    this.editMode = new ReactiveVar(false);
});
Template.newNoteForm.events({ 
    'submit .newNoteForm': function(event, template) { 
        event.preventDefault();

         const title = event.target.noteTitle.value; 
         const body = event.target.noteBody.value; 

        NotesCollection.insert({
            noteTitle: title,
            noteBody: body,
            createdAt: new Date(),
        });
        event.target.noteTitle.value = '';
        event.target.noteBody.value = '';
    },
    'click .editMode'(event, instance) {
        instance.editMode.set(!instance.editMode.get());
    } 
});
Template.newNoteForm.helpers({
    editMode() {
        return Template.instance().editMode.get();
    }
});
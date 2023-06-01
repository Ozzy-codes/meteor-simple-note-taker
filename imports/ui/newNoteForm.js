import { Meteor } from 'meteor/meteor';
import { Template } from "meteor/templating";
import { ReactiveVar } from 'meteor/reactive-var';

import './newNoteForm.html';

Template.newNoteForm.onCreated(function() {
    this.expandForm = new ReactiveVar(false);
});
Template.newNoteForm.events({ 
    'submit #newNoteForm': function(event, template) { 
        event.preventDefault();

         const title = event.target.noteTitle.value; 
         const body = event.target.noteBody.value; 

        Meteor.call('notes.insert', title, body);

        event.target.noteTitle.value = '';
        event.target.noteBody.value = '';
    },
    'click #expandForm'(event, instance) {
        instance.expandForm.set(!instance.expandForm.get());
    } 
});
Template.newNoteForm.helpers({
    expandForm() {
        return Template.instance().expandForm.get();
    }
});
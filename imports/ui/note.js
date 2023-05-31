import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './note.html'

Template.note.onCreated(function() {
   this.expand = new ReactiveVar(false);
});
Template.note.events({
    'click #individual-note'(event,instance){
        instance.expand.set(!instance.expand.get());
    },
    'click #delete'(event,instance){
        Meteor.call('notes.remove',this._id)
    },
})
Template.note.helpers({
    expand: function() {
        return Template.instance().expand.get();
    }
});
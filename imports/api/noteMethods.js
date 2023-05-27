import { Meteor } from 'meteor/meteor';
import { NotesCollection } from '../db/noteCollection';
import { check } from 'meteor/check';

Meteor.methods({
    'notes.insert'(title, body){
        check(title, String);
        check(body, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized');
        }
        NotesCollection.insert({
            noteTitle: title,
            noteBody: body,
            createdAt: new Date(),
            userId: this.userId,
        })
    },

})
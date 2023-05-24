import { Template } from "meteor/templating";
import { NotesCollection } from "../db/noteCollection";

import './newNoteForm.html';

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
    } 
});
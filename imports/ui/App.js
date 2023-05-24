import { Template } from "meteor/templating";
import { NotesCollection } from "../db/noteCollection";

import './App.html';
import './note.js'
import './newNoteForm'

Template.mainContainer.helpers({
    notes() {
        return NotesCollection.find({});
    },
});
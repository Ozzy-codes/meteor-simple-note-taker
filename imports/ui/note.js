import './note.html'

Template.note.helpers({

	title() {
		console.log(this);
		return this.title;
	}

});
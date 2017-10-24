import Ember from 'ember';


export default Ember.Controller.extend({
	actions:{
		searchForReddit(){
			event.preventDefault();  // this line is a must for using form for onsubmit
			let keywords = this.get('keywords');
			this.transitionToRoute('search', keywords);
		}
	}
});

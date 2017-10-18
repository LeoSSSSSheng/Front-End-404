import Ember from 'ember';


export default Ember.Controller.extend({
	actions:{
		searchForReddit(){
			let keywords = this.get('keywords');
			this.transitionToRoute('search', keywords);
		}
	}
});

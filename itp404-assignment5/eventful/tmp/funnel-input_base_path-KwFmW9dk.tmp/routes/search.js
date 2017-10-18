import Ember from 'ember';
import $ from 'jquery';


export default Ember.Route.extend({
	model:function(params) {
		let keywords = params.keywords;
		let url = `https://www.reddit.com/r/${keywords}.json`;
		//console.log($.getJSON(url));
		return $.getJSON(url)
	}
});

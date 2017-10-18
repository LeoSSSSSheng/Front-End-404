define('eventful/routes/search', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = Ember.$;
	exports.default = Ember.Route.extend({
		model: function model(params) {
			var keywords = params.keywords;
			var url = 'https://www.reddit.com/r/' + keywords + '.json';
			//console.log($.getJSON(url));
			return $.getJSON(url);
		}
	});
});
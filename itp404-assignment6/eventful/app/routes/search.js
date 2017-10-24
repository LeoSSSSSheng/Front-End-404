import Ember from 'ember';
import $ from 'jquery';

var inject = Ember.inject;

export default Ember.Route.extend({
	//this is how we inject the Service
	//after this now the reddit service is inside
	//current this object
	//to retrieve it must use this.get('reddit')
	//then to use the service must call the service method
	//parameters are same of the model parameter
	reddit: inject.service(),
	model(params) {
		// console.log(params.keywords);
		//service return a -->promise<--
		let obj = this.get('reddit').findAllForSubreddit(params);

		obj.then(function(res){
			console.log(res.data.children);
		});

		//in the hbs file model is already obj.res not obj

		return obj;
	}
});

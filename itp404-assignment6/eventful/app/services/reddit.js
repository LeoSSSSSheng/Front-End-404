import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  findAllForSubreddit: function(params){
    let url = `https://www.reddit.com/r/${params.keywords}.json`;
    return $.getJSON(url);
  }
});

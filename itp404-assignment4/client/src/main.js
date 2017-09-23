let repoTemplate = $('#repo-template').html();
let renderRepo = Handlebars.compile(repoTemplate);

let searchTemplate = $('#searchHistory-template').html();
let renderSearchHistory = Handlebars.compile(searchTemplate);

//load historic data from server using Get. Once per page reload
$.ajax({
		type: "GET",
		url: "http://localhost:3000/api/searches"
	}).then(function(res){
		console.log(res);
		$("#search_history").html(renderSearchHistory({
			searches: res
		}));
	});


$('#search-button').on('click', function(){
	//make github api request
	let userName = $("#text_area").val();
	$.getJSON('https://api.github.com/users/' + userName + '/repos').then(function(res){
		console.log(res);
		//render each repo to html using handle bar template.
		$("#repositories").html(renderRepo({
			repos: res
		}));
	});
	//recording history data via rest API
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/api/searches',
		data: {
			name: "Search",
			term: userName,
			createdAt: new Date()
		}
	}).then(function(response){
		 //console.log(searches);
		 searches = [];
		 searches.push(response);
		 $("#search_history").append(renderSearchHistory({
			searches: searches
		}));
	});
});




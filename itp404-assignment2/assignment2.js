//setup button
$("button").on("click", function(){
	var input = $("input").val();
	$("#loading").addClass("loader");
	$.getJSON('https://www.reddit.com/r/' + input + ".json").then(function(res){
		$("#loading").removeClass("loader");
		var items = res.data.children;
		console.log(items);
		display(items);
	}, function(error){
		$("#item").text("Oops! Something went wrong!");
		$("#item").css(errorStyle);
	});
});

//setup display using handlebars
function display(items){
	var template = $("#display_template").html();
	console.log(template);
	var renderItem = Handlebars.compile(template);
	var content = renderItem({item:items});
	console.log(content);
	$("#item").html(content);
	$("#item").removeAttr("style");
	$(".eachItem").css(itemStyle);
}

//styling
let errorStyle={
	color: "red",
	fontSize: "30px",
	textAlign: "center"
}

let itemStyle={
	backgroundColor: "#eeeeee",
	margin: "5%",
	textAlign: "center"
}

let input = {
	textAlign: "center",
	marginTop: "5%"
}

let container = {
	backgroundColor: "#bbbbbb",
}
let textInput = {
	width: "20%"
}

$("#input").css(input);
$("#container").css(container);
$("#text").css(textInput)
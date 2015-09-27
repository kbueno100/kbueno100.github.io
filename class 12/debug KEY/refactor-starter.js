//Example 1
$("body").append("<img src='images/Nate.png' alt='Nate\'s picture'><p>The instructor for this course is Nate Cooper. Nate wrote a comic book about HTML.</p>");

var first_name = "Nate";
var last_name = "Cooper";

$("body").append("<img src='images/Nate.png' alt='" + first_name + "\'s picture'><p>The instructor for this course is" + first_name + last_name +". Nate wrote a comic book about HTML.</p>");

//Example 2
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

createLi("Milk");
createLi("Cookies");
createLi("Sugar");

function createLi(myLiText) {
	$("#container>ol").prepend("<li>" + myLiText + "</li>");
}

//Example 3
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

var groceries= ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

groceries.forEach(createLi);

//Example 4
$("#container, #main").css("width","960px");


//Example 5
$("#container,#main").css({"width": "960px","background": "red", "color" : "purple"});


//Example 6
$("input").css("width","200px").attr("placeholder","My placeholder").before("<label>My input</label>");

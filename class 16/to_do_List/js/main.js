//set an initial value (keep track of to-dos)
var count = 0;
//When #New is submitted add the new item
$('#new').on('submit', addNewItem);

//when you click on item. mark as complete or incomplete
$('#todos').on('click', '.item', switchStatus);

//when a remove link is clicked, remove that item
$('#todos').on('click','.remove', removeItem);

//when an edit link clicked, go to edit mode 
$('#todos').on('click','.edit', editItem);


//when an item editor is submitted, save the changes
$('#todos').on('submit', '.editor', saveItem);

//when user leaves an item editor, save the changes
$('#todos').on('blur', '.editor', saveItem);

//when the clear list button is clicked, clear the items
$('#clear').on('click', clearItem);

//when clear completed is clicked, clear the completed items 
$('#clearCompleted').on('click', completedItem);
//functions 

//update total
function updateCount() {
	//log the current count
	console.log(count);

	//count the number of items
	count = $('#todos li').not('.done').length;
	console.log(count);

	//update count on screen
	$('#count').html(count);
}

//add a new item
function addNewItem(event) {
	//prevent page reload
	event.preventDefault();

	//get the text from user input
	var newItem = $('#newItem').val();

	//store that text into a list item
	//add an <li> w/the text into the <ul>
	$('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	$('#newItem').val('');
	updateCount();

}

//remove item
function removeItem(event) {
	//prevent page reload
	event.preventDefault();

	//get the parent of the link and remove
	$(this).parent().remove();

	//update the count 
	updateCount();
}

//edit item
function editItem(event) {
	//prevent page reload
	event.preventDefault();

	//get the text of the todo item
	var itemText = $(this).siblings('.item').html();

	//get the parent <li>
	var listItem = $(this).parent();

	//replace parent contents with an edit form 
	listItem.html('<form class="editor"><input value=" ' + itemText + '"></form>');

	//focus the keybaord on input that was added
	listItem.find('input').focus();
}

//save item
function saveItem(event) {
	//prevent reload
	event.preventDefault();

	//get the new text 
	var itemText = $(this).children('input').val();

	//get the parent
	var listItem = $(this).parent();

	//replace parent with <li> with the updated item
	listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');
}

//update status
function switchStatus() {
	//get the parent li
	var listItem = $(this).parent();

	//toggle the class of the parent <li>
	listItem.toggleClass('done');

	//update the count
	updateCount();
}


//clear entire list 
function clearItem() {
	//get the parent of the link and remove
	$('#todos li').remove();

	//update the count 
	updateCount();
}

//clear completed list
function completedItem() {
    $('.done').remove();
    updateCount();
}



 



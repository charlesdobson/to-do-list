var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // Creates an element "li"
	li.appendChild(document.createTextNode(input.value)); // Makes text from input field the li text
	ul.appendChild(li); // Adds li to ul
	input.value = ""; // Reset text input field to prep for next input


	// Start strikethrough
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	// End strikethrough


	// Start add/delete button
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// End add/delete button


	// Add class delete (no display)
	function deleteListItem(){
		li.classList.add("delete")
	}
	// End class delete
}


function addListAfterClick(){
	if (inputLength() > 0) { // Makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
    // Checks to see if you hit enter (13)
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


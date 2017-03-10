function setUpEvents() {

	var redBoxes = document.getElementsByClassName("redBox");
	// console.log(redBoxes.length);
	//console.log(redBoxes); //[div.redBox, div.redBox, div.redBox]

	var redH2 = redBoxes[2].getElementsByTagName('h2');

	redH2[0].textContent = 'JLab Rocks!'

	for(let i = 0; i <= redBoxes.length; i++){

		if (i === 0) {
			var currentH2 = redBoxes[i].getElementsByTagName('h2');
			currentH2[0].textContent = 'I found you';
			redBoxes[i].style.background = 'yellow';
		}
		if (i === 2) {
			redBoxes[i].style.background = 'green';

		}
		if (i === 5 ){
			var currentH2 = redBoxes[i].getElementsByTagName('h2');
			currentH2[0].textContent = 'Last Box';
			redBoxes[i].style.background = 'pink';
		}
		if ( i === 4){
			var currentH2 = redBoxes[i].getElementsByTagName('h2');
			currentH2[0].textContent = 'This is fun';
			redBoxes[i].style.background = 'blue';
		}
	}
	//LINK
	var link = document.getElementById('link1');
	var clear = document.getElementById('clear');
	clear.className = 'clearFix';

	var linkAttr = link.getAttribute('href')
	//console.log(linkAttr); // was /subject
	link.setAttribute('href','#');
	link.setAttribute('class', 'hyper');
	link.setAttribute('class', 'newHyper');
	//replaces
	link.setAttribute('style', 'color: red');
	link.setAttribute('style', 'color: red; font-size: 30px; margin: 10px;');
	//update a single property without replacing
	link.style.color = 'black';
	link.style.backgroundColor = 'green';

	// console.log(link);

	//create new element
	var newLi = document.createElement('li');
	var newLi2 = document.createElement('li');

	var newA = document.createElement('a');
	var newA2 = document.createElement('a');

	var ul = document.getElementById('todoList');
	// console.log(ul);
	ul.appendChild(newLi);
	newLi.appendChild(newA);
	newA.textContent = 'Study';
	newA.setAttribute('href', '#');

	ul.insertBefore(newLi2, ul.getElementsByTagName('li')[0]);
	newLi2.appendChild(newA2);
	newA2.textContent = "Learn the basics";
	newA2.setAttribute('href', '#');

	var childLi = ul.getElementsByTagName('li')[2];

	var removedChild = ul.removeChild(childLi);

	ul.appendChild(removedChild);

	var clickedMe = function(){
		console.log('You did clicked Me');
	}

	var mouseOver = function(){
		console.log('You moused over me');
	}

	clickMe = document.getElementById('clickMe');

	clickMe.onclick = function(){
		console.log('did you click me?');
		setTimeout(clickedMe, 2000);
	}
	mouseMe = document.getElementById('mouseMe');
	mouseMe.onmouseover = mouseOver;
}
function colorChanger(){
	var divColor = document.getElementById('colorChanger');
	var divContent = divColor.getElementsByTagName('h2')[0];
	var colors = ['blue','pink','red','yellow','black','orange','purple','green','coral','DarkOliveGreen','aqua','chocolate'];
	var sentences = ['Are','You','Ready','For','The','Next','Season','Of','Game', 'Of', 'Thrones', '?'];
	console.log('colors',colors.length, 'sentences', sentences.length);
	var counter = 0;

	function changeColor(){
		divColor.style.background = colors[counter];
		divContent.textContent = sentences[counter];
		counter++;
		if(counter === colors.length){
			counter = 0;
		}
		if (counter % 2 !== 0){
			divContent.style.color = 'white';
		} else {
			divContent.style.color = 'black';
		}
	}

	setInterval(changeColor,2000);

}

window.onload = function(){
	console.log('Window is loaded');
	setUpEvents()
	setTimeout(colorChanger(), 1000);
};








var content = document.getElementById('content');
var button = document.getElementById('show-more');
 
button.onclick = function(){
	if(content.className === "open"){
		//shrink
		content.className = '';
		button.textContent = 'Show More';
	} else {
		//expand
		content.className = 'open';
		button.textContent = 'Show Less';
	}
};


var redBoxes = document.getElementsByClassName("redBox");
console.log(redBoxes.length);
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

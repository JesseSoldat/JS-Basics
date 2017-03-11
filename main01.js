function arguments(){
	var string = '';

	for(var i = 0; i < arguments.length; i++){
		string += arguments[i] + ' ';
	}
	return string;
}

var argString = arguments(1,2,3);
var hello = arguments('Hello', 'from', 'JLab')
console.log(hello);

function threeArgs(a, b, c){
	a = a || '';
	b = b || '';
	c = c || '';

	console.log(a+' '+b+' '+c);
}
// threeArgs('Awesome');
var msg = document.getElementById('msg');
// var num = String(prompt('Enter you Account Number', ''));

// while (num.length < 8) {
// 	num = '0' + num;
// }

// do {
// 	num = "0" + num;
// }
// while (num.length < 8)

//SUBSTRING
// num = ('00000000' + num).substr(-8);
var name = 'Jesse Soldat';
var firstName = name.substr(0,5);
// console.log(firstName);
var lastName = name.substr(6);
// console.log(lastName);

var lastNameSliced = name.slice(6)
console.log(lastNameSliced);

// msg.textContent = num;



arrayMsg = document.getElementById('array');

//PUSH POP UNSHIFT SHIFT
var arrayMethods = [1,2,3,4,5];
//arrayMethods.push(6,7,8,9);
//arrayMethods.pop(); //last element
//arrayMethods.unshift('a','b','c'); //adds first element
//arrayMethods.shift(); //removes first element
// console.log(arrayMethods);

//CONCAT
var arrayConcat = ['a','b','c'];
var arrayConcated = arrayMethods.concat(arrayConcat);
arrayMsg.textContent = arrayConcated;
// console.log(newArray);


//REVERESE
var reverse = arrayMethods.reverse();
// console.log(reverse);

//SLICE
var arraySlice = [1,2,3,4,5,6,7,8,9];
var slice = arraySlice.slice(1,2);//2
var slice2 = arraySlice.slice(2,-2);//index 2 to one index from the last [3, 4, 5, 6, 7]
//console.log(slice2); //creates new array
//console.log(arraySlice); //slice does not modify original

//SPICE
var spliceArray = [1,2,3,4,5,6,7,7,9,10];
var spliced = spliceArray.splice(2, 3, 'I', 'AM','SPLICED');
// console.log(spliceArray); //original array modified
//console.log(spliced); //[3, 4, 5] what was spliced out

//JOIN
var joinArray = ['We', 'Are', 'Learning'];
var joined = joinArray.join(' ');
// console.log(joined);

//SORTING
var sortArrayNum = [5,9,1,4,8,11,15,2,0,42]; 
// sortArrayNum.sort();
// console.log(sortArrayNum);
//[0, 1, 11, 15, 2, 4, 42, 5, 8, 9]

function sortLowToHight(a,b){
	return a - b;
}

function sortHightToLow(a,b){
	return b - a;
}
// sortArrayNum.sort(sortLowToHight);
// console.log(sortArrayNum);

// sortArrayNum.sort(sortHightToLow);
// console.log(sortArrayNum);

sortArrayNum.sort( (a,b) => a - b);
console.log(sortArrayNum);

sortArrayNum.sort( (a,b) => b - a);
console.log(sortArrayNum);

var animals= ['dog','cat','mouse','tiger','zebra','elephant','monkey'];

animals.sort(); //standad sort converts to string and sorts a-z
animals.reverse(); //z-a
console.log(animals);

animals.sort( (a,b) => a.length - b.length);
console.log(animals);



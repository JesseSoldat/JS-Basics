var msg = document.getElementById('msg');
//OBJECTS 
var car = car || {};

car.make = 'Ford';
car.model = 'Mustang';
car.color = 'blue';

car.display = function(){
	msg.innerHTML += '<p>Your car is a '+this.color+' '+this.make+' '+this.model+'</p>';
};

var myProp = 'color';
car[myProp] = 'red';

//car.display(); //Your car is a red Ford Mustang

var car2 = car; //create a ref. NOT a new copy

car2.color = 'black';

//car2.display(); //Your car is a black Ford Mustang
//car.display(); //Your car is a black Ford Mustang

var car3 = car3 || {};

for(var prop in car){
	if(car.hasOwnProperty(prop)) { //hasOwnProperty not a deeper property
	car3[prop] = car[prop]; //true COPY NOT REF
	}
}

car3.color = 'sliver';
//car3.display(); //COPY does not affect original
//car.display();


//CONSTRUCTOR
function Car(make, model, color, letter){
	this.make = make || 'unknown';
	this.model = model || 'model';
	this.color = color || 'unpainted';	
	this.letter = letter;

	// this.display = function(){
	// 	msg.innerHTML += '<p>Your car is '+this.letter+' '+this.color+' '+this.make+' '+this.model+'</p>';
	// };
}

Car.prototype.display = function(){
	msg.innerHTML += '<p>Your car is '+this.letter+' '+this.color+' '+this.make+' '+this.model+'</p>';
};

function createCar(make, model, color){
	var letter;

	if(color === undefined){
		letter = 'an'
	} else {
		var newColor = color.toUpperCase();
		var char = newColor.substring(0, 1);
		
		let booleanVowel = isVowel(char);
		
		if(booleanVowel){
			letter = 'an';
    } else {
    	letter = 'a';
    }
	}
		
	function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
	}	

	return new Car(make, model, color, letter);
}

var toyota = createCar('Toyota','Camry','white');
var ford = createCar('Ford','GTO','orange');
var audi = createCar('Audi', 'Sedan', 'silver');
var mazda = createCar('Mazda','CX3', 'black');
var unknown = createCar();

mazda.display = function(){
	msg.innerHTML += '<p>I want to buy '+this.letter+' '+this.color+' '+this.make+' '+this.model+'</p>';
};
mazda.display(); //finds the display method on its own instance

toyota.display(); //looks at toyota. do I have a display method? NO. since it
ford.display();   //is a type of Car (new Car) it finds the method on Car
audi.display();
unknown.display();

//Object Prototypes
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}

var reverse = 'reverse me';
var reversed = reverse.reverse(); 
console.log(reversed);

for (var char in reverse){
	//console.log(char); //can see each letter AND the reverse function
	//can avoid with .hasOwnProperty(prop)
	if ( reverse.hasOwnProperty(char) ) {
			//console.log(char); //properties that have NOT been inherited must directly belong
	}
}
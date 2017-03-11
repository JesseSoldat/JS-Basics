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
function Car(make, model, color){
	var letter;
	
	// if(color.shift() === )
	this.make = make;
	this.model = model;
	this.color = color;


	if(color !== undefined){
		var newColor = color.toUpperCase();
		var char = newColor.substring(0, 1);
		
		let booleanVowel = isVowel(char);
		
		if(booleanVowel){
			console.log(this.color);
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

	this.display = function(){
	msg.innerHTML += '<p>Your car is '+letter+' '+this.color+' '+this.make+' '+this.model+'</p>';
	};
}

var toyota = new Car('Toyota','Camry','white');
var ford = new Car('Ford','GTO','orange');
var audi = new Car('Audi', 'Sedan', 'silver');


toyota.display();
ford.display();
audi.display();

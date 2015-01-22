// Create a Person constructor that accepts name and age as parameters and sets 
// those properties accordingly in the Constructor.
// Code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
}

// Now create three instances of Person with data you make up
// Code here
var person1 = new Person("Johnny", 24);
var person2 = new Person("Sally", 33);
var person3 = new Person("Bryan", 47);


// Now add a sayName method on your Person class that will alert the name of whatever 
// Person instance called it.
// Code here
Person.prototype.sayName = function() {
	alert(this.name);
};  

person1.sayName();

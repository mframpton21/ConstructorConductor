// Create a Person constructor that accepts name and age as parameters and sets 
// those properties accordingly in the Constructor.

  //code here
var User = function(name, age){
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var user1 = new User("Johnny", 24);
var user2 = new User("Sally", 33);
var user3 = new User("Bryan", 47);


// Now add a sayName method on your Person class that will alert the name of whatever 
// Person instance called it.

  //code here
User.prototype.sayName = function() {
	alert(this.name);
};  

user1.sayName();

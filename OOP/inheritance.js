function Parent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Parent.prototype.sayHi = function(){
    return this.firstName + " " + this.lastName + " says hi!";
}

function Child(firstName, lastName){
    // This is how we "inherit" properties from the parent
    Parent.apply(this,arguments);
}

// This is how we inherit functions
// (create a new prototype + reset the constructor)
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var c = new Child("Bran", "Stark");

console.log(c.sayHi());
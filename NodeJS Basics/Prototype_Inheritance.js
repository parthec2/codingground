var Prototype_Inheritance = (function(){
    
    
    console.log("=====Welcome to learn basics of function constructor and Prototype Inheritance in JS===============");
    
    //function constructor ex--when u create new object using fun constoructor then this will poin to empty object
    function Person(firstName,lastName){
        this._firstName = firstName;    
        this._lastName = lastName;
    }
    
    Person.prototype.fullName = function(){
                                        console.log("geting fullname using protype inheritance" );
                                        console.log("Full Name is -: " + this._firstName + " " +this._lastName );
                                };
    
    var vihu = new Person("Vihaan","Shah");
    console.log(vihu._firstName);
    console.log(vihu.fullName());
    
    console.log("----------------------------------------------------------------------------------------------------------");
}());//IIFE
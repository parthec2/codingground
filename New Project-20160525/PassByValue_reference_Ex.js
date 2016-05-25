var Passby_Value_Reference =  (function(){
    
    console.log("======Pass By Value example====================================");
    //pass by value example
    function PassByValueEx(i){
        i=2;
    }
    var a=1;
    console.log(a);
    PassByValueEx(a);
    console.log(a);
    console.log("Value does not change because it was Pass By Value-integer");
    
    //pass by reference example 
    function PassByReferenceEx(obj){ 
        obj.prop2 = "I am now string";
        obj.prop3 = function(){console.log("Hey, I am prop3");};
    }
    
    var sampleObj ={
        prop1:1,
        prop2:function(){console.log("I am prop2 func,Happy coding");}
    }
    console.log("======Pass By Reference example====================================");
    console.log("checking prop2 of obj before passing to function");
    console.log("Checking typeof in JS:- " + typeof sampleObj);
    console.log(sampleObj);
    console.log(sampleObj.prop2());
    PassByReferenceEx(sampleObj);
    console.log("checking prop2 of obj AFTER passing to function");
    console.log("Checking typeof in JS:- " + typeof sampleObj);
    console.log(sampleObj);

}());//IIFE

module.exports = Passby_Value_Reference;
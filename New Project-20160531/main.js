/* Simple Hello World in Node.js */
console.log("Welcome to world of Events in NodeJs");

var emitterFunConstructor = require("./Emitter.js");

var emitter1 = new emitterFunConstructor();
emitter1.on('greet',function(){console.log("Hello how are you");});
console.log("++++ Added listener1 for greet");

emitter1.on('greet',function(){console.log("Hey,I am fine,How do u do??");});

console.log("++++ Added listener2 for greet");

console.log("========>=========>");
console.log("Now emitting the greet listeners");
emitter1.emit('greet');

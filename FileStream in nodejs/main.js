/* Simple Hello World in Node.js */
console.log("====== Welcome to the world of filestream in nodejs ======================= ");

var fs = require("fs");//get File stream object of node

var output = fs.readFileSync(__dirname + "/Newfile.js","utf8");

console.log("Sync call output is -: " + output);

var output1 = fs.readFile(__dirname + "/Newfile.js","utf8",
function(err,data){
    //undefined check
   // err = undefined; 
   // if(err == undefined)    {        console.log("Something is "+err);    }
   // err = null;
    if(err != null)
    {
        console.log("Error occured-: " + err);
    }
    console.log("ASync callback output is -: " + data);
    
}); //end of readFile function

console.log("======== End of example =========================================");
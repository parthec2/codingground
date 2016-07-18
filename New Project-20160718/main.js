/* Simple Hello World in Node.js */
var fs = require("fs");//get File stream object of node
/*
console.log("====== Welcome to the world of filestream in nodejs ======================= ");
var output = fs.readFileSync(__dirname + "/Newfile.js","utf8");
console.log(__dirname);
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
*/
console.log("====== Welcome to the world of readable/writeable streams in nodejs ======================= ");
var readablestream = fs.createReadStream(__dirname + '/ReadMe.txt',{encoding:'utf8',highWaterMark: 16 * 1024} );
var writeablestream = fs.createWriteStream(__dirname + '/WriteMe.txt');

readablestream.on('data',function(chunck){
   //console.log('chunck.length''');  
   console.log(chunck); 
   writeablestream.write(chunck);
});
//var writablestream =fs.createWriteStream(__dirname + 'WriteMe.txt')







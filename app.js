////first example
// function sayHello(name){
//     console.log("Hello " + name);
// }

// sayHello("Kazeem")

// //second example
// const log = require("./logger");

// log("MESSAGE");

// //third example
// const path = require("path");

// const pathObj = path.parse(__filename);

// console.log(pathObj);

// //Forth (from Nodejs documentation - moduling OS)
// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// //Fifth
// const fs = require('fs');

// const files = fs.readdirSync('./')

// console.log(files);

// //Sixth
// const fs = require("fs");

//  fs.readdir("./", function (error, files) {
//   if (error) console.log("Error ", error);
//   else console.log("Result ", files);
// });

// //7th
// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// //Register an event listener
// emitter.on("messageLogged", (arg) => {
//   console.log("Listener Called", arg);
// });

// //Raise an event
// emitter.emit("messageLogged", {id: 1, url: "http//  "});

// //8th
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// //Register an event listener
// emitter.on("loggin", (arg) => {
//   console.log("Loggin Called", arg);
// });

// const log = require("./logger");
// log("Gessage");

// //9th
// // const EventEmitter = require("events");

// const Logger = require('./logger')
// const logger = new Logger()

// //Register an event listener
// logger.on("loggin", (arg) => {
//   console.log("Loggin Called", arg);
// });

// logger.log("Gessage");

// //10th http module
// const http = require('http')

// const server = http.createServer()

// server.on('connection', (_socket) => {
//   console.log("New Connection..");
// })

// server.listen(3000)

// console.log('Server listens at port 3000....');

//11th http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello KAZEEM, Welcome to NodeJS");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Server listens at port 3000....");

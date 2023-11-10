// //1st
// const person = require('./person')

// console.log(person.age);

// //2nd from logger.js file
// const Person = require("./person"); //this method of import is called COMMONJS

// const person1 = new Person('Kazeem', 30);

// person1.greeting();

// const person2 = new Person('Jonh', 20)

// person2.greeting()

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Kazeem", age: "30" },
  //     { name: "Amuzat", age: "100" },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

    // Handling '/about' path separately
    if (req.url === "/about") {
      filePath = path.join(__dirname, "public", "about.html");
    }

  console.log(filePath);

  //Extension of file
  let extname = path.extname(filePath);

  //Initial content type
  let contentType = "text/html";

  //Check ext and set content
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some Server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listens at port ${PORT}`));
//This project is deployed on Heroku, 
//installed heroku cli
//check in the terminal (heroku --version) ($env:PATH += ";C:\Program Files\Heroku\bin")
//heroku login
//include files you don't want push in .gitignore

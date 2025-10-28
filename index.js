//import the required modules
import http from "http";
import fs from "fs";
import path from "path";
const PORT = 3000;

//create the server
const server = http.createServer((req, res) => {
  //get the requested url
  let filepath = "./pages" + req.url;

  //serve the different pages based on the url
  if (req.url === "/") {
    filepath = "./pages/index.html";
  } else if (req.url === "/about") {
    filepath = "./pages/about.html";
  } else if (req.url === "/contact") {
    filepath = "./pages/contact.html";
  } else {
    filepath = "./pages/404.html";
  }

  //set the content type
  const contentType = "text/html";

  //read and serve the file
  console.log(filepath);

  fs.readFile(filepath, (err, content) => {
    //if the page does not exist serve a custom 404 page
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(filepath, (error, notFound) => {
          res.writeHead(404, { "Content-Type": contentType });
          res.end(notFound, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

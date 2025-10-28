//import the required modules
import http from "http";
import fs from "fs";
//create the server
const server = http.createServer((req, res) => {
  //get the url of the requested page
  let filePath = "./pages" + req.url;
  //set the file paths according to the different url
  if (req.url === "/") {
    filePath = "./pages/index.html";
  } else if (req.url === "/about") {
    filePath = "./pages/about.html";
  } else if (req.url === "/contact") {
    filePath = filePath = "./pages/contact.html";
  }
  //set the content type
  const contentType = "/text/html";
  //read the file and serve the different content
  fs.readFile(filePath, (err, content) => {
    //if an error occurs serve the custom 404 page
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(filePath, (error, nocontent) => {
          res.writeHead(404, { "Content-Type": contentType });
          res.end(nocontent, "utf-8");
        });
      } else {
        //other server errors
        res.writeHead(500);
        res.end(`server error:${err.code}`);
      }
    } else {
      //if the request is successful return the page
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

//listen at a certain port for the results
const PORT = 3020;
server.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});

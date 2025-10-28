//import the required modules
import http from "http";
import fs from "fs";
import path from "path";
const PORT = 3000;

//create the server
const server = http.createServer((req, res) => {
  //get the requested url
  let filepath = "/pages" + req.url;
  console.log(filepath);
});

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

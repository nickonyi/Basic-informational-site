import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirName, "pages")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirName, "pages", "index.html"));
});

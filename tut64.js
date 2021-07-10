const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("Browser", "Aarjav");
console.log("Content of file is");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("aarjav.txt", text);
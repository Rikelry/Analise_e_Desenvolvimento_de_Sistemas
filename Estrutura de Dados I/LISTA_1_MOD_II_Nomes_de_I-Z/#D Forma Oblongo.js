const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const X = input[0];
const Y = input[1];

if (Math.abs(X - Y) === 1) {
    console.log(X * Y);
} else {
    console.log("NAO FORMA OBLONGO!");
}

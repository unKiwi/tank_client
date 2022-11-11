const data = require("./src/data");

data.screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}
console.log("data")

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = data.screen.width;
canvas.height = data.screen.height;

setInterval(() => {
    console.log(data)
}, 1000 / 60);
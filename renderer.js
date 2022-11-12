const data = require("./src/data");

console.log(data)

data.screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = data.screen.width;
canvas.height = data.screen.height;

setInterval(() => {
    
}, 1000 / 60);
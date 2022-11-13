const config = require("./src/config");
const drawTank = require("./src/drawing/tank");
const drawMap = require("./src/drawing/map");

const { ipcRenderer } = require('electron');

const screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}
screen.unit = (screen.width + screen.height) / 2 / config.scaleFactor;

ipcRenderer.send('screen', screen);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = screen.width;
canvas.height = screen.height;

ipcRenderer.on('redraw', (event, repository) => {
    console.log("redraw")
    // erase
    ctx.clearRect(0, 0, screen.width, screen.height);

    // map
    drawMap(ctx, repository);

    // tanks
    let tanks = repository.serverState.tanks;
    let myTank = tanks[repository.id];

    Object.keys(tanks).forEach(key => {
        let tank = tanks[key];
        drawTank(ctx, repository.screen, myTank, tank);
    });
});
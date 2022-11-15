const config = require("./src/config");
const drawTank = require("./src/drawing/tank");
const drawMap = require("./src/drawing/map");

const { ipcRenderer } = require('electron');

const screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}

ipcRenderer.send('screen', screen);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = screen.width;
canvas.height = screen.height;

ipcRenderer.on('redraw', (event, repository) => {
    repository = JSON.parse(repository);

    // erase
    ctx.clearRect(0, 0, screen.width, screen.height);

    // map
    drawMap(ctx, repository);

    // tanks
    repository.tanks.forEach(tank => {
        drawTank(ctx, repository, tank);
    });
});
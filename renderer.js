const config = require("./src/config");
const drawPlayer = require("./src/drawing/player");

const { ipcRenderer } = require('electron');

ipcRenderer.on('redraw', (event, repository) => {
    let myTank = repository.serverState.tanks[repository.id];
    drawPlayer(ctx, screen.width / 2, screen.height / 2);
})

const screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}
screen.unit = (screen.width + screen.height) / 2 / config.scaleFactor;

ipcRenderer.send('screen', screen)

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = screen.width;
canvas.height = screen.height;
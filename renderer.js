const config = require("./src/config");
const drawPlayer = require("./src/drawing/player");

const { ipcRenderer } = require('electron');

const screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}
screen.unit = (screen.width + screen.height) / 2 / config.scaleFactor;

ipcRenderer.on('redraw', (event, repository) => {
    ctx.clearRect(0, 0, screen.width, screen.height);

    let tanks = repository.serverState.tanks;
    let myTank = tanks[repository.id];

    Object.keys(tanks).forEach(key => {
        let tank = tanks[key];
        drawPlayer(ctx, screen.width / 2 + (tank.x - myTank.x) * screen.unit, screen.height / 2 + (tank.y - myTank.y) * screen.unit);
    });
});

ipcRenderer.send('screen', screen);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = screen.width;
canvas.height = screen.height;
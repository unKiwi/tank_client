const socket = require('./socket');
const data = require('./data');

const ioHook = require('iohook');
const utils = require('./utils');

ioHook.on('mouseclick', (event) => {
    socket.emit('fire', {
        x: event.x,
        y: event.y
    });
    console.log(data)
});

ioHook.on('mousemove', (event) => {
    if (!data.serverState.tanks) return;

    // calculate angle between tank and mouse
    // let myTank = data.serverState.tanks[data.id];
    // let angle = utils.getAngleDegrees(data.screen.width / 2, data.screen.height / 2, event.x, event.y);
});

ioHook.on('keydown', (event) => {
    console.log(event)
});

ioHook.on('keyup', (event) => {
    console.log(event)
});

ioHook.start();

module.exports = ioHook;
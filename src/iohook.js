const socket = require('./socket');
const repository = require('./repository');

const ioHook = require('iohook');
const utils = require('./utils');

ioHook.on('mouseclick', (event) => {
    socket.emit('fire', {
        x: event.x,
        y: event.y
    });
});

ioHook.on('mousemove', (event) => {
    if (!repository.serverState.tanks) return;

    // calculate angle between tank and mouse
    // let myTank = repository.serverState.tanks[repository.id];
    let angle = utils.getAngleDegrees(repository.screen.width / 2, repository.screen.height / 2, event.x, event.y);
});

ioHook.on('keydown', (event) => {
    console.log(event)
});

ioHook.on('keyup', (event) => {
    console.log(event)
});

ioHook.start();

module.exports = ioHook;
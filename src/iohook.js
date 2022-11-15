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
    // calculate angle between tank and mouse
    let angle = utils.getAngleDegrees(repository.screen.width / 2, repository.screen.height / 2, event.x, event.y);
    repository.clientState.cannonDirection = angle;
});

ioHook.on('keydown', (event) => {
    switch (event.keycode) {
        case 3675:
            repository.clientState.leftChennille = "forward";
            break;

        case 3676:
            repository.clientState.rightChennille = "forward";
            break;

        case 56:
            repository.clientState.leftChennille = "backward";
            break;

        case 3640:
            repository.clientState.rightChennille = "backward";
            break;
    }
});

ioHook.on('keyup', (event) => {
    switch (event.keycode) {
        case 3675:
            repository.clientState.leftChennille = "static";
            break;

        case 3676:
            repository.clientState.rightChennille = "static";
            break;

        case 56:
            repository.clientState.leftChennille = "static";
            break;

        case 3640:
            repository.clientState.rightChennille = "static";
            break;
    }
});

ioHook.start();

module.exports = ioHook;
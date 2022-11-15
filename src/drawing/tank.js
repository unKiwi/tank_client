const config = require("../config");
const tankShape = require("../models/tank");

module.exports = (ctx, repository, tank) => {
    let { screen, myTankPos } = repository;

    ctx.save();

    let translateX = screen.width / 2 + (tank.x - myTankPos.x) * screen.unit;
    let translateY = screen.height / 2 + (tank.y - myTankPos.y) * screen.unit;
    ctx.translate(translateX, translateY);
    let rotate = tank.movingDirection * Math.PI / 180;
    ctx.rotate(rotate);
    
    // chennille
    let lengthX = tankShape.chennille.length * screen.unit;
    let lengthY = tankShape.chennille.width * screen.unit;
    let chennilleWidth = (tankShape.chennille.width - tankShape.body.width) / 2 * screen.unit;
    ctx.fillStyle = "rgb(55, 56, 62)";
    ctx.fillRect(-lengthX / 2, -lengthY / 2, lengthX, chennilleWidth);
    ctx.fillRect(-lengthX / 2, lengthY / 2 - chennilleWidth, lengthX, chennilleWidth);

    // body
    lengthX = tankShape.body.length * screen.unit;
    lengthY = tankShape.body.width * screen.unit;
    ctx.fillStyle = `rgb(${tank.color.r - config.colorContrast}, ${tank.color.g - config.colorContrast}, ${tank.color.b - config.colorContrast})`;
    ctx.fillRect(-lengthX / 2, -lengthY / 2, lengthX, lengthY);

    ctx.rotate(-rotate);
    rotate = tank.cannonDirection * Math.PI / 180;
    ctx.rotate(rotate);

    // head
    lengthX = tankShape.head.length * screen.unit;
    lengthY = tankShape.head.width * screen.unit;
    ctx.fillStyle = `rgb(${tank.color.r}, ${tank.color.g}, ${tank.color.b})`;
    ctx.fillRect(-lengthX / 2, -lengthY / 2, lengthX, lengthY);

    // cannon
    lengthX = tankShape.cannon.length * screen.unit;
    lengthY = tankShape.cannon.width * screen.unit;
    ctx.fillStyle = "rgb(55, 56, 62)";
    ctx.fillRect(tankShape.head.length / 2 * screen.unit, -lengthY / 2, lengthX, lengthY);

    // silencieux
    lengthX = tankShape.silencieux.length * screen.unit;
    lengthY = tankShape.silencieux.width * screen.unit;
    ctx.fillStyle = `rgb(${tank.color.r + config.colorContrast}, ${tank.color.g + config.colorContrast}, ${tank.color.b + config.colorContrast})`;
    ctx.fillRect((tankShape.head.length / 2 + tankShape.cannon.length) * screen.unit, -lengthY / 2, lengthX, lengthY);

    ctx.restore();
}
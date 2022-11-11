const utils = {}

utils.getAngleDegrees = (fromX, fromY, toX, toY, force360 = true) => {
    let deltaX = toX - fromX;
    let deltaY = toY - fromY;
    let radians = Math.atan2(deltaY, deltaX);
    let degrees = (radians * 180) / Math.PI;
    if (force360) {
        while (degrees >= 360) degrees -= 360;
        while (degrees < 0) degrees += 360;
    }
    return degrees;
}

module.exports = utils;
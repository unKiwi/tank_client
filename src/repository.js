const repository = {
    id: undefined,
    screen: {
        width: undefined,
        height: undefined,
        unit: undefined,
    },
    clientState: {
        leftChennille: "static",
        rightChennille: "static",
        movingDirection: undefined,
        cannonDirection: undefined,
    },
    map: undefined,
    tanks: undefined,
    myTankPos: undefined,
}

repository.update = (serverState) => {
    repository.map = serverState.map;
    let myTank = serverState.tanks[repository.id];
    if (!myTank) return;
    repository.myTankPos = {
        x: myTank.x,
        y: myTank.y,
    };
    repository.tanks = [];
    Object.keys(serverState.tanks).forEach(key => {
        repository.tanks.push(serverState.tanks[key]);
    });
}

repository.calculateIntermediateState = () => {
    
}

module.exports = repository;
module.exports = (ctx, repository) => {
    let tanks = repository.serverState.tanks;
    let myTank = tanks[repository.id];

    // border
    ctx.rect(repository.screen.width / 2 - myTank.x * repository.screen.unit, repository.screen.height / 2 - myTank.y * repository.screen.unit, repository.screen.width, repository.screen.height)
    ctx.stroke();

    // wall

    // hole
}
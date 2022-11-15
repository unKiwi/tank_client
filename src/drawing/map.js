module.exports = (ctx, repository) => {
    // border
    ctx.strokeRect(
        repository.screen.width / 2 - repository.myTankPos.x * repository.screen.unit,
        repository.screen.height / 2 - repository.myTankPos.y * repository.screen.unit,
        repository.map.width * repository.screen.unit,
        repository.map.height * repository.screen.unit,
    );

    // wall

    // hole
}
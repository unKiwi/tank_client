module.exports = (ctx, x, y) => {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, true);
    ctx.fill();
}
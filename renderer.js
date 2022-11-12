const screen = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.electronAPI.screen(screen);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// resize canvas
canvas.width = screen.width;
canvas.height = screen.height;

window.electronAPI.handleRedraw((event, value) => {
    console.log(event, value)
});
const {app, BrowserWindow} = require('electron')
const path = require('path')

const config = require('./config.js')

const ioHook = require('iohook');
const { io } = require("socket.io-client");
const socket = io(config.ip);

socket.on('connection',()=>{
  socket.emit('login', objectMouse);
});

ioHook.on('mouseclick', (event) => {
  let objectMouse = {
    x: event.x,
    y: event.y
  }
  socket.emit('move', objectMouse);
});

ioHook.start();
//Connection server



function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // width: 800,
    // height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    alwaysOnTop: true,
    transparent: true,
    frame: false,
    autoHideMenuBar: true,
    icon: null,
    skipTaskbar: true,
    // fullscreen: true,
  })

  mainWindow.setSkipTaskbar(true);
  mainWindow.setWindowButtonVisibility(true);
  mainWindow.setIgnoreMouseEvents(true, { forward: true });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

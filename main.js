require("./src/iohook");
const repository = require("./src/repository");
const config = require("./src/config");

const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    alwaysOnTop: true,
    transparent: true,
    frame: false,
    hasShadow: false,
    skipTaskbar: true,
    autoHideMenuBar: true,
    focusable: false,
    fullscreen: true,
    simpleFullscreen: true,
    thickFrame: false,
    icon: null,

    enableLargerThanScreen: true,
    movable: false,
  });

  mainWindow.setSkipTaskbar(true);
  mainWindow.setWindowButtonVisibility(false);
  mainWindow.setIgnoreMouseEvents(true, { forward: true });

  mainWindow.webContents.openDevTools({ mode: "detach" });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: "detach" });

  setInterval(() => {
    mainWindow.webContents.send('redraw', repository);
  }, 1000 / config.frameRate);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.on('screen', (_event, value) => {
    repository.screen = value;
  });

  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

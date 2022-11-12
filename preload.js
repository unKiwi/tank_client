const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  screen: (data) => ipcRenderer.send('screen', data),
  handleRedraw: (callback) => ipcRenderer.on('redraw', callback)
});
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

const fs = require('fs')

app.disableHardwareAcceleration()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 800,
    webPreferences: {
      offscreen: true
    }
  })

  mainWindow.loadURL('http://github.com')

  mainWindow.webContents.on('paint', (e, dirtyArea, nativeImage) => {
    let image = nativeImage.toPNG()
    fs.writeFile('/Users/Onetec/Desktop/guardado.png', image, () => {
      
    })
  })
})
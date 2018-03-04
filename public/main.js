const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600, 
    height: 480
  });
  
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', () => app.quit());
});

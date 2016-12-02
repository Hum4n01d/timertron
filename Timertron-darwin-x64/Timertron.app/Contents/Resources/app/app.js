#!/usr/local/bin/electron .
const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 275,
        height: 200,
        backgroundColor: '#444',
        show: false,
        titleBarStyle: 'hidden'
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // win.webContents.openDevTools()

    win.setMinimumSize(275, 200)
    win.on('closed', () => {
        win = null
    })
    win.once('ready-to-show', () => {
        win.show()
    })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // Close app on CMD-W
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    // Dock icon click
    if (win === null) {
        createWindow()
    }
})

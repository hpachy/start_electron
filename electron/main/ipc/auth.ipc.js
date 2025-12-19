const { ipcMain } = require('electron')

let isAuthenticated = false

function registerAuthHandlers() {
    ipcMain.handle('auth:login', (_, { username, password }) => {
        console.log('Auth logic triggered')
        if (!username || !password) return false
        isAuthenticated = true
        return true
    })

    ipcMain.handle('auth:status', () => isAuthenticated)
}

module.exports = { registerAuthHandlers }
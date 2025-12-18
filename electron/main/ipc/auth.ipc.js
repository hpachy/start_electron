let isAuthenticated = false

ipcMain.handle('auth:login', (_, { username, password }) => {
    if (!username || !password) return false
    isAuthenticated = true
    return true
})

ipcMain.handle('auth:status', () => isAuthenticated)

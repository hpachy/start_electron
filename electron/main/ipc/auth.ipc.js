const { ipcMain } = require('electron')
const db = require('../db/database')

function registerAuthHandlers() {
    ipcMain.handle('auth:signup', (_, { username, password }) => {
        if (!username || !password) return false

        const user = db
            .prepare('SELECT id FROM auth WHERE username = ?')
            .get(username)

        if (user) return false


        const passwordHash = password // (fake hash ici pour la pédagogie)

        db.prepare(
            'INSERT INTO auth (username, password) VALUES (?, ?)'
        ).run(username, passwordHash)
        return true
    })

    ipcMain.handle('auth:login', (_, { username, password }) => {
        if (!username || !password) return false

        const user = db
            .prepare('SELECT id FROM auth WHERE username = ? AND password = ?')
            .get(username, password)

        if (!user) return false
        db.prepare('DELETE FROM session').run()
        db.prepare(
            'INSERT INTO session (id, userId) VALUES (1, ?)'
        ).run(user.id)

        return true
    })

    ipcMain.handle('auth:logout', () => {
        db.prepare('DELETE FROM session').run()
        return true
    })

    ipcMain.handle('auth:status', () => {
        const session = db.prepare('SELECT userId FROM session').get()
        return !!session
    })
}

module.exports = { registerAuthHandlers }
const { ipcMain } = require('electron');
const db = require('../db/database')



function registerTodosHandlers() {
    ipcMain.handle('todos:list', () => {
        return db.prepare('SELECT * FROM todos').all()
    })

    ipcMain.handle('todos:add', (_, payload) => {
        const { text } = payload;
        if (typeof text !== 'string' || !text.trim()) {
            throw new Error('Invalid todo')
        }
        db.prepare('INSERT INTO todos (text) VALUES (?)').run(text)
        return db.prepare('SELECT * FROM todos').all()
    })

    ipcMain.handle('todos:remove', (_, id) => {
        db.prepare('DELETE FROM todos WHERE id = ?').run(id)
        return db.prepare('SELECT * FROM todos').all()
    })
}

module.exports = { registerTodosHandlers }

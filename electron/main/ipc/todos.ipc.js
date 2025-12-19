const { randomUUID } = require('crypto');
const { ipcMain } = require('electron');

let todos = []


function registerTodosHandlers() {
    ipcMain.handle('todos:list', () => {
        return todos
    })

    ipcMain.handle('todos:add', (_, payload) => {
        const { text } = payload;
        if (typeof text !== 'string' || !text.trim()) {
            throw new Error('Invalid todo')
        }

        const todo = {
            id: randomUUID(),
            text: text.trim()
        }

        todos.push(todo)
        return todos
    })

    ipcMain.handle('todos:remove', (_, id) => {
        todos = todos.filter(t => t.id !== id)
        return todos
    })
}

module.exports = { registerTodosHandlers }

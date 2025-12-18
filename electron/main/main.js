const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')


const todos = []
let token = null

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../preload/index.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    const indexPath = path.join(__dirname, '../renderer/out/index.html')

    win.loadFile(indexPath).catch(err => {
        console.error("Erreur lors du chargement du fichier HTML:", err)
    })
}

// Auth
ipcMain.handle('auth-login', (event, { username, password }) => {
    if (username && password) {
        token = 'fake-token'
        return { success: true, token }
    }
    return { success: false }
})

// Todos CRUD
ipcMain.handle('get-todos', () => todos)
ipcMain.handle('save-todo', (event, todo) => {
    todos.push(todo)
    return todos
})

// API externe (PokeAPI)
ipcMain.handle('fetch-pokemon', async (event, name) => {
    console.log('fetchPokemon triggered')
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    if (!res.ok) return null
    console.log('fetchPokemon response received', await res.json())
    return await res.json()
})



app.whenReady().then(createWindow)

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { registerAuthHandlers } = require('./ipc/auth.ipc')
const { registerTodosHandlers } = require('./ipc/todos.ipc');
const { pokemonHandlers } = require('./ipc/pokemon.ipc');


const todos = []
let token = null

const isDev = process.env.EXPORT === 'true'

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

    if (isDev) {
        // On charge l'URL du serveur Next.js
        win.loadURL('http://localhost:3000');
        // Optionnel : ouvre l'inspecteur automatiquement en dev
        win.webContents.openDevTools();
    } else {
        // En prod, on charge le fichier statique
        const indexPath = path.join(__dirname, '../renderer/out/index.html')

        win.loadFile(indexPath).catch(err => {
            console.error("Erreur lors du chargement du fichier HTML:", err)
        })
    }
}

// Auth
registerAuthHandlers()
registerTodosHandlers()
pokemonHandlers()

app.whenReady().then(createWindow)

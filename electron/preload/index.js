const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    login: (username, password) => ipcRenderer.invoke('auth-login', { username, password }),
    getTodos: () => ipcRenderer.invoke('get-todos'),
    saveTodo: (todo) => ipcRenderer.invoke('save-todo', todo),
    fetchPokemon: (name) => ipcRenderer.invoke('fetch-pokemon', name)
})

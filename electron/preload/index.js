const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    // Auth
    login: (username, password) => ipcRenderer.invoke('auth:login', { username, password }),
    isAuthenticated: () => ipcRenderer.invoke('auth:status'),
    // Todos CRUD
    getTodos: () => ipcRenderer.invoke('get-todos'),
    saveTodo: (todo) => ipcRenderer.invoke('save-todo', todo),
    // API externe (PokeAPI)
    fetchPokemon: (name) => ipcRenderer.invoke('fetch-pokemon', name)
})

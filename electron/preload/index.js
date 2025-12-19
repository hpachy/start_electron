const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    // Auth
    login: (username, password) => ipcRenderer.invoke('auth:login', { username, password }),
    isAuthenticated: () => ipcRenderer.invoke('auth:status'),
    // Todos CRUD
    getTodos: () => ipcRenderer.invoke('todos:list'),
    addTodo: (todo) => ipcRenderer.invoke('todos:add', todo),
    removeTodo: (id) => ipcRenderer.invoke('todos:remove', id),
    // API externe (PokeAPI)
    fetchPokemon: (name) => ipcRenderer.invoke('pokemon:search', name)
})

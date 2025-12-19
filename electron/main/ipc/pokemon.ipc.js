const { ipcMain } = require('electron');

function pokemonHandlers() {
    ipcMain.handle('pokemon:search', async (event, payload) => {
        const { name } = payload;
        if (typeof name !== 'string' || !name.trim()) {
            throw new Error('Invalid pokemon name');
        }
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if (!res.ok) return null
        return await res.json()
    })
}

module.exports = { pokemonHandlers }

import { useEffect, useState } from 'react'

export default function Home() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [pokemon, setPokemon] = useState(null)

    const handleLogin = async () => {
        const success = await window.api.login('hugo', 'mon-password');
        console.log('Réponse du Main Process (success) :', success);

        const status = await window.api.isAuthenticated();
    }


    const addTodo = async () => {
        const updated = await window.api.saveTodo({ text: input })
        setTodos(updated)
        setInput('')
    }

    const fetchPokemon = async (name) => {
        const data = await window.api.fetchPokemon(name)
        setPokemon(data)
    }

    return (
        <div>
            <h1>Electron + Next.js. + console</h1>
            <button onClick={handleLogin}>Login</button>


            <h2>Todo List</h2>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((t, i) => <li key={i}>{t.text}</li>)}
            </ul>

            <h2>Pokémon API</h2>
            <button onClick={() => fetchPokemon('pikachu')}>Fetch Pikachu</button>
            {pokemon && <div>{pokemon.name} - {pokemon.height}cm</div>}
        </div>
    )
}

import { useEffect, useState } from 'react'

export default function Home() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [pokemon, setPokemon] = useState(null)

    const addTodo = async () => {
        console.log('addTodo triggered')
        const updated = await window.api.saveTodo({ text: input })
        setTodos(updated)
        setInput('')
    }

    const fetchPokemon = async (name) => {
        const data = await window.api.fetchPokemon(name)
        setPokemon(data)
    }

    useEffect(() => {
        console.log("Ceci doit apparaître dans l'inspecteur Electron !");
    }, []);

    return (
        <div>
            <h1>Electron + Next.js. + console</h1>

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

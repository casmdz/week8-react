import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <section className='card'>
    <div>
        <h2>Look over poke list</h2>
        {pokemon.map((p) => (
            <div key={p}>{p}</div>
        ))}

    </div>
    </section>
  )
}

import React, {useEffect, useState}  from 'react'
import Tarjetas from '../Tarjeta/Tarjeta'


function BuscarPokemon() {

    const [cargaPokemones, setCargaPokemones] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
    const [updatePokemones, setUpdatePokemones] = useState([])

    const getupdatePokemones = async () => {
        const response = await fetch(cargaPokemones)
        const data = await response.json()
        setCargaPokemones(data.next)

        function crearObjetoListaPokemones(resultado) {
            resultado.forEach(async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await response.json()

            setUpdatePokemones(lista => [...lista, data])
            })
        }

        crearObjetoListaPokemones(data.results)

    }

    useEffect(() => {
        getupdatePokemones()
    }, [])


    return (
        
        <div className='flex flex-wrap justify-center'>
            {updatePokemones.map((pokemon, idx) => ( 
                <div className='espacio-tarjetas'>
                    <Tarjetas
                        key={idx}
                        cod={pokemon.id}
                        nombre={pokemon.name}
                        tipo={pokemon.types[0].type.name}
                        peso={pokemon.weight}
                        altura={pokemon.height}
                        imagenfrontal={pokemon.sprites.front_default}
                        exp_base={pokemon.base_experience}


                    />
                </div>
            ))}
        </div>
        

    )
}

export default BuscarPokemon

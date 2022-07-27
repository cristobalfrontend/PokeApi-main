import React, { useEffect, useState } from "react"

const List = (props) => {

    const [pokemons, setPokemons] = useState([])

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then( (data) => {
                console.log(data)
                setPokemons(data.results)
            })
    }, [])

    return (
        <>
            Lista de Pokemones ! <br />
            { pokemons.map( (pokemon) => {
                return (<div>{pokemon.name}</div>)
            } ) }
        </>
    )
}

export default List
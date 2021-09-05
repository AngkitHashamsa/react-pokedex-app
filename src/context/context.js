import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const getPokemon = async (url) => {
    setLoading(true)
    const res = await axios.get(url).catch((err) => console.log(err))

    if (res) {
      const results = res.data.results

      const newData = {}
      results.map((item, index) => {
        return (newData[index + 1] = {
          id: index + 1,
          name: item.name,
          sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`,
        })
      })

      setPokemon(newData)
      setLoading(false)
    }
  }

  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon?limit=150`)
  }, [])

  return (
    <AppContext.Provider value={{ pokemon, loading, filter, handleChange }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

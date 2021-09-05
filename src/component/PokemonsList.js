import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Pokemon from './Pokemon'
import { useGlobalContext } from '../context/context'
const useStyles = makeStyles({
  sectionCenter: {
    padding: '1rem ',
  },
})
const PokemonsList = () => {
  const classes = useStyles()
  const { pokemon, filter } = useGlobalContext()

  return (
    <Grid container className={classes.sectionCenter} spacing={1}>
      {Object.keys(pokemon).map((PokemonId) => {
        return (
          pokemon[PokemonId].name.includes(filter.toLowerCase()) && (
            <Pokemon key={PokemonId} PokemonId={PokemonId} pokemon={pokemon} />
          )
        )
      })}
    </Grid>
  )
}

export default PokemonsList

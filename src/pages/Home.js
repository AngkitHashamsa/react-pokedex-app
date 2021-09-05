import React from 'react'
import Container from '@material-ui/core/Container'
import PokemonsList from '../component/PokemonsList'

import CircularProgress from '@material-ui/core/CircularProgress'
import { useGlobalContext } from '../context/context'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../component/Header'

const useStyles = makeStyles({
  itemCenter: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15rem',
  },
})

export const Home = () => {
  const classes = useStyles()
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <Container>
        <div className={classes.itemCenter}>
          <CircularProgress />
        </div>
      </Container>
    )
  }

  return (
    <Container component='main'>
      <Header />
      <PokemonsList />
    </Container>
  )
}

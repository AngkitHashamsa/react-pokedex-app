import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import axios from 'axios'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { getTypeStyle, upperCase } from '../constant/color'
import SingleStats from '../component/SingleStats'
export const SinglePokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const classes = useStyles()

  // console.log(getTypeStyle('flying'))

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        if (res) {
          setPokemon(res.data)
          setLoading(false)
        }
      })
      .catch((err) => console.log(err))
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className={classes.itemCenter}>
          <CircularProgress />
        </div>
      </Container>
    )
  }
  const { name, sprites, types, height, moves, weight, stats } = pokemon
  // console.log(pokemon)

  const total = moves && moves.length

  const smallPicture = sprites && sprites['front_default']

  const other = sprites && sprites.other
  const picture = other && other['official-artwork']['front_default']

  return (
    <Container className={classes.pokemonContainer} maxWidth='md'>
      <Card square className={classes.carPadding}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.background}>
            <div className={classes.title}>
              <Typography className={classes.textArea} variant='h5'>
                1# {name}
              </Typography>
              <img
                src={smallPicture}
                alt={name}
                style={{ width: '70px', height: '70px' }}
              />
            </div>

            <CardMedia
              image={picture}
              style={{ height: '250px', width: '250px', margin: 'auto' }}
              component='img'
              title={name}
            />
          </Grid>

          {/* Pokemon info */}

          <Grid item xs={12} sm={6} style={{ backgroundColor: '#30a7d7' }}>
            <CardContent>
              <Typography variant='h5' style={{ color: '#ffffff' }}>
                Pokemon info
              </Typography>
              <div>
                <div className={classes.flexText}>
                  <Typography variant='h6' color='initial'>
                    Height:
                  </Typography>
                  <Typography
                    className={classes.fontSizes}
                    variant='subtitle1'
                    color='textPrimary'
                  >
                    {height}
                  </Typography>
                </div>
                <div className={classes.flexText}>
                  <Typography variant='h6' color='initial'>
                    weight:
                  </Typography>
                  <Typography
                    className={classes.fontSizes}
                    variant='subtitle1'
                    color='textPrimary'
                  >
                    {weight}
                  </Typography>
                </div>
                <div className={classes.flexText}>
                  <Typography variant='h6' color='initial'>
                    Number of moves:
                  </Typography>
                  <Typography
                    className={classes.fontSizes}
                    variant='subtitle1'
                    color='textPrimary'
                  >
                    {total}
                  </Typography>
                </div>

                <Typography variant='h6' className={classes.flexText}>
                  Type:
                </Typography>
                {types &&
                  types.map((item, index) => {
                    const { name } = item.type
                    return (
                      <Typography
                        key={index}
                        variant='subtitle1'
                        color='initial'
                        style={getTypeStyle(name)}
                        className={classes.typeColor}
                      >
                        {upperCase(name)}
                      </Typography>
                    )
                  })}
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Card square style={{ backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <SingleStats stats={stats} />
        </CardContent>
      </Card>
    </Container>
  )
}

const useStyles = makeStyles({
  itemCenter: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15rem',
  },
  pokemonContainer: {
    marginTop: '1rem',
    padding: '0.75rem',
    height: '100vh',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '0.5rem',
    paddingTop: '0',
  },
  textArea: {
    textTransform: 'capitalize',
  },
  flexText: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  fontSizes: {
    fontSize: '1rem',
    padding: 0,
    paddingTop: '0.2rem',
    paddingLeft: '0.5rem',
  },
  background: {
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#dedbdb',
  },
  carPadding: {
    padding: '2rem',
    background: '#f5f5f5',
  },
  type: {
    marginLeft: '0.75rem',
  },
  typeColor: {
    padding: '0.75rem',
    width: '5rem',
    marginBottom: '0.5rem',
    borderRadius: '0.5rem',
    display: 'grid',
    placeItems: 'center',
  },
})

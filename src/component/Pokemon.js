import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  textArea: {
    textTransform: 'capitalize',
  },
  cardMedia: {
    margin: 'auto',
  },
  background: {
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#dedbdb',
  },
})

const Pokemon = ({ PokemonId, pokemon }) => {
  const classes = useStyles()
  const { id, name, sprites } = pokemon[`${PokemonId}`]

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link
        component={RouterLink}
        underline='none'
        to={`/pokemon/${PokemonId}`}
      >
        <Card className={classes.background}>
          <CardMedia
            image={sprites}
            style={{ height: '130px', width: '130px' }}
            className={classes.cardMedia}
          />

          <CardContent>
            <Typography
              align='left'
              className={classes.textArea}
              variant='h6'
              color='textSecondary'
            >
              {name}
            </Typography>
            <Typography align='left' className={classes.textArea} variant='h6'>
              #{id}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default Pokemon

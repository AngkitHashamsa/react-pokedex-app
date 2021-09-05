import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import { upperCase } from '../constant/color'
import Container from '@material-ui/core/Container'
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#dedbdb',
  },
}))
// <BorderLinearProgress variant='determinate' value={60} />
const SingleStats = ({ stats }) => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.container}>
      {stats.map((item, index) => {
        console.log(item)
        const {
          base_stat,
          stat: { name },
        } = item
        return (
          <Grid key={index} container spacing={2}>
            <Grid item xs={3}>
              {upperCase(name)} : {base_stat}
            </Grid>
            <Grid item xs={9}>
              <BorderLinearProgress variant='determinate' value={base_stat} />
            </Grid>
          </Grid>
        )
      })}
    </Container>
  )
}

export default SingleStats

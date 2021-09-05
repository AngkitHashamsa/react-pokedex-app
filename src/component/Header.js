import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import picture from '../pic/pokeball.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '1rem',
  },
  dflex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  mRight: {
    marginLeft: theme.spacing(2),
  },
  background: {
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#dedbdb',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth='xs'>
      <Paper className={classes.background}>
        <div className={classes.dflex}>
          <img
            src={picture}
            alt='pokeball'
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
          <Typography
            variant='h4'
            className={classes.mRight}
            align='center'
            color='initial'
          >
            Johto Pokemon
          </Typography>
        </div>
      </Paper>
    </Container>
  )
}

export default Header

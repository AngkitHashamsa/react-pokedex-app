import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Container from '@material-ui/core/Container'
import { makeStyles, alpha } from '@material-ui/core/styles'
import { useGlobalContext } from '../context/context'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import picture from '../pic/download.png'
const Navbar = () => {
  const { handleChange } = useGlobalContext()

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Container>
          <Toolbar>
            <Link
              underline='none'
              className={`${classes.logo}`}
              component={RouterLink}
              to='/'
            >
              <img
                src={picture}
                alt='pikachu'
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                }}
              />
            </Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onSubmit={(e) => e.preventDefault()}
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleChange}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    grow: {
      flexGrow: 1,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    textTransform: 'capitalize',
    zIndex: 3,
    color: 'black',
  },
}))

export default Navbar

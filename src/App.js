import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'

import { Home } from './pages/Home'
import { SinglePokemon } from './pages/SinglePokemon'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pokemon/:id' children={<SinglePokemon />} />
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import './App.css';
import Nav from './Nav'
import TodoApp from './week1/todos/TodoApp'
import JokeApp from './week2/jokes/JokeApp'
import SpotsApp from './week2/vacationSpots/SpotsApp'
import BoxApp from './week2/coloredBoxes/BoxApp'
import BlogApp from './week2/blogList/BlogApp'
import HeroApp from './week3/superHeros/HeroApp'
import DiceApp from './week3/dice/DiceApp'
import DJApp from './week3/djTiles/DJApp'
import NameApp from './week4/nameEntry/NameApp'
import BadgeApp from './week4/nameBadges/BadgeApp'
import Footer from './Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/TodoApp' component={TodoApp} />
          <Route exact path='/JokeApp' component={JokeApp} />
          <Route exact path='/SpotsApp' component={SpotsApp} />
          <Route exact path='/BoxApp' component={BoxApp} />
          <Route exact path='/BlogApp' component={BlogApp} />
          <Route exact path='/HeroApp' component={HeroApp} />
          <Route exact path='/DiceApp' component={DiceApp} />
          <Route exact path='/DJApp' component={DJApp} />
          <Route exact path='/NameApp' component={NameApp} />
          <Route exact path='/BadgeApp' component={BadgeApp} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
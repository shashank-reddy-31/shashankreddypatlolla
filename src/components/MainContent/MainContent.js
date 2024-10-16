import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const MainContent = () => {
  return (
    <main className="main-content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  )
}

export default MainContent
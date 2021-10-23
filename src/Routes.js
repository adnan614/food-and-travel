import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/site/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Home} excat component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

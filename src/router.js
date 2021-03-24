import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {routes} from './pages'


function makeLink(routes){
  return(
    <ul>
      {routes.map((route, i) => (
        <Link to={route.path} key={i}>{route.name}</Link>
        ))}
    </ul>
  )
}

function makeSwitch(routes){
  return(
    <Switch>
      {routes.map((route, i) => (
        <Route exact path={route.path} key={i} >
          {route.fn}
        </Route>
      ))}
    </Switch>
  )
}

function Routing(){
  return(
    <Router>
      <div>
        <nav>
          {makeLink(routes)}
        </nav>
        {makeSwitch(routes)}
      </div>
    </Router>
  )
}


export default Routing
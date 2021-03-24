import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {routes} from './pages'


function makeLink(routes){
  return(
    <ul className="navigaton__list">
      {routes.map((route, i) => (
        <li className="navigation__list--item">
          <Link to={route.path} key={i} className="navigation__list--link" cy-data-link={route.cy}>{route.name}</Link>
        </li>
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
      <div className="nav__container">
        <nav className="nav__container--navigation">
          {makeLink(routes)}
        </nav>
        {makeSwitch(routes)}
      </div>
    </Router>
  )
}


export default Routing
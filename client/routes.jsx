import React                            from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory }         from 'history';

import Header  from './components/Header';
import Home    from './components/Home.jsx';
import Tenders from './components/Tenders.jsx';
import Plans   from './components/Plans.jsx';

const history = createBrowserHistory();

const RouteWithHeader = (props) => {
  const { path, component, render } = props;

  return (
    <div>
      <Header goBack={history.goBack} />
      <Route path={path} component={component} render={render} />
    </div>
  )
}

const Routes = (props) => {
  return (
    <div>
      <Router history={ history } >
        <Switch>
          <RouteWithHeader exact path='/' component={Home} />
          <RouteWithHeader path='/tenders' render={ (routeProps) => <Tenders { ...routeProps } tenders={props.tenders} /> } />
          <RouteWithHeader path='/plans' render={ () => <Plans plans={props.plans} /> } />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
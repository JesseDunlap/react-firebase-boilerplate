import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { HomeContainer as Home } from '../Home';
import { LoginContainer as Login } from '../Login';

class Routes extends Component {
  render() {
    if (this.props.isLoading) {
      return <p>Loading</p>;
    }
    
    return (
      <Router>
        <React.Fragment>
          {/* Navbars, Sidebars, etc. go here */}
          
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;

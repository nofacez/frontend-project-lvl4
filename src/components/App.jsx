import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import NoMatch from './NoMatchRoute.jsx';

const App = () => {
  console.log(window.localStorage);
  return (
    <Router>
      <div className="h-100 d-flex flex-column">
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">Hexlet-chat</Link>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;

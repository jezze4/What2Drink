import React, {PureComponent} from 'react';
import AppNavbar from './components/AppNavbar';
import { withRouter, Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import './styles/appnavbar.css';

class App extends PureComponent {
  render(){
    return (
      <div className="App">
        <Router>
          <AppNavbar />
          <h1>App.js Home</h1>
          <Switch>
            <Route exact path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

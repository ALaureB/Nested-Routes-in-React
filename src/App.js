import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import Accueil from './components/Accueil';
import Contenus from './components/Contenus';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div style={{width: 1000, margin: '0 auto'}}>
            <ul>
              <li><Link to='/'>Accueil</Link></li>
              <li><Link to='/contenus'>Contenus</Link></li>
            </ul>

          </div>
          <Route exact path='/' component={Accueil} />
          <Route path='/contenus' component={Contenus} />
        </div>
      </Router>
    );
  }
}

export default App;
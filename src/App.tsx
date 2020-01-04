import React, { ChangeEvent } from 'react';
import {
  HashRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import { Header } from './components/header/Header';
import { Tile } from './components/tile/Tile';
import { List } from './components/list/List';
import { Home } from './routes/home';


type State = {
  q: string
  shows: any
}

class App extends React.Component<State> {
  state: State = {
    q: '',
    shows: []
  }

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    this.setState({q: query})
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => res.json())
    .then(data => this.setState({shows: data}));
  }

  render() {
    const { q, shows } = this.state;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/home">
              <Home
                q={q}
                shows={shows}
                handleSearchChange={this.handleSearchChange}
              />
            </Route>
            <Redirect to="/home"/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;

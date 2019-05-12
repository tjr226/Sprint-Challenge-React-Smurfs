import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState(() => ({ smurfs: res.data }))
      })
      .catch(err => console.log(err));
  }

  postSmurf = smurf => {
    Axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Smurfs</h1>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/SmurfForm">Add Smurf</NavLink>
          </div>
        </nav>
        <SmurfForm postSmurf={this.postSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;

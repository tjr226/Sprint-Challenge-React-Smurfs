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
        this.setState(() => ({ smurfs: res.data }));
        console.log(res);
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

  deleteSmurf = id => {
    Axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({ smurfs: res.data })
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
          <h1>Smurf Village</h1>
          <div className="nav-links">
            <NavLink className="nav-link" exact to="/">Smurf List</NavLink>
            <NavLink className="nav-link" to="/SmurfForm">Add Smurf</NavLink>
          </div>
        </nav>
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} /> } />
        <Route path="/SmurfForm" render={(props) => <SmurfForm {...props} postSmurf={this.postSmurf} /> } />
      </div>
    );
  }
}

export default App;

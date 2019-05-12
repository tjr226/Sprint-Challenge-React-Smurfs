import React from 'react';

import { Link } from 'react-router-dom';

class Smurf extends React.Component {

  deleteSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.id);
  }


  render() {
    return (

      <div className="Smurf">
        <Link 
        to={`/Smurf/${this.props.id}`} 
        className="link-to-smurf" >
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
        </Link>
        <form onSubmit={this.deleteSmurf}>
          <button type="submit">Evict Smurf</button>
        </form>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


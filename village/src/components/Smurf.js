import React from 'react';

class Smurf extends React.Component {

  deleteSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.id);
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
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


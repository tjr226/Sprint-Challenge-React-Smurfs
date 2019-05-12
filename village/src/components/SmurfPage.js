import React from 'react';

function SmurfPage(props) {
    const id = props.match.params.id;
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === id);


    return (
        <div className="Smurf">
            <h3>{smurf.name}</h3>
            <strong>{smurf.height} tall</strong>
            <p>{smurf.age} smurf years old</p>
        </div>
    );
};

SmurfPage.defaultProps = {
    name: '',
    height: '',
    age: ''
};

export default SmurfPage;
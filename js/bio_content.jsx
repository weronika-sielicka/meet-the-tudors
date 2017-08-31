import React from 'react';
import ReactDOM from 'react-dom';

class BioContent extends React.Component {

  render() {
    return (
      <div className="bio">
        <p className="bioTitle">{this.props.name}</p>
        <p className="bioDates">{this.props.dateBirth}-{this.props.dateDeath}</p>
        <p className="bioText">{this.props.text}</p>
      </div>
    )
  }
}

module.exports = BioContent;

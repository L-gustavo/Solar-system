import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    // const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        {/* <p> { planetName } { planetImage }  </p> */}
      </div>
    );
  }
}

// PlanetCard.PropTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired,
// };

export default PlanetCard;

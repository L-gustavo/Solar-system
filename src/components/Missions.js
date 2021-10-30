import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        {missions.map((elem) => (
          <span key={ missions.name }>
            <MissionCard
              name={ elem.name }
              year={ elem.year }
              country={ elem.country }
              destination={ elem.destination }
            />
          </span>
        ))}
      </>
    );
  }
}

export default Missions;

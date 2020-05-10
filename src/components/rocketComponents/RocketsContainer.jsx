import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RocketList from './RocketList';
import MissionList from './MissionList';

function RocketsContainer() {
  return (
    <Container>
      <Row>
        <RocketList />
      </Row>
      <Row>
        <MissionList />
      </Row>
    </Container>
  );
}

export default RocketsContainer;

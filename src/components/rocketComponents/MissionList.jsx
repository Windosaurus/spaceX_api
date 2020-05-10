import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import {
  Container, Row, ListGroup, ListGroupItem, Table, Badge,
} from 'react-bootstrap';
import { fetchAllMissions } from '../../redux/actions/missionsActions';
import ErrorCard from '../ErrorCard';

function MissionList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.missions);

  useEffect(() => {
    function getMissions() {
      dispatch(fetchAllMissions());
    }
    getMissions();
  }, []);

  function loadMissions(missions) {
    let rocketFilter;
    let searchFilter;
    if (state.missionsType === 'All') {
      rocketFilter = '';
    } else {
      rocketFilter = state.missionsType;
    }
    if (state.missionsFilter !== undefined && state.missionsFilter !== '') {
      searchFilter = state.missionsFilter.toLowerCase();
    } else {
      searchFilter = '';
    }

    let displayCount = 0;
    const filteredMissions = [];
    for (let i = 0; i < missions.length; i++) {
      const missionRocket = missions[i].rocket;
      const missionType = missions[i].type.toLowerCase();
      let missionDetails;
      if (missions[i].details !== null) {
        missionDetails = missions[i].details.toLowerCase();
      } else {
        missionDetails = '';
      }

      if (missionRocket.includes(rocketFilter)
          && (missionType.includes((searchFilter)) || missionDetails.includes(searchFilter))) {
        filteredMissions.push(missions[i]);
        displayCount += 1;
      }
    }

    console.log('Filtered missions', filteredMissions);

    return (
      <div>
        <h5 style={{ marginLeft: '1em' }}>
          {' '}
          Available results
          {' '}
          <Badge variant="secondary">{displayCount}</Badge>
        </h5>
        <ListGroup>
          {filteredMissions.map((mission, index) => (
            <ListGroupItem key={index} className="my-2">
              <Table borderless hover size="sm">
                <thead>
                  <tr>
                    <th style={{ fontSize: '1.1em' }}>
                      Rocket Name:
                      {mission.rocket}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style={{ color: 'grey', fontSize: '0.7em' }}>
                      Type:
                      {mission.type}
                    </th>
                  </tr>
                  <tr>
                    <th style={{ fontSize: '0.7em' }}>
                      Details:
                      {mission.details}
                    </th>
                  </tr>
                  <tr>
                    <th style={{ fontSize: '0.7em' }}>
                      Location:
                      {mission.location}
                    </th>
                  </tr>
                  <tr>
                    <th style={{ fontSize: '0.7em' }}>
                      Launch Date:
                      {Moment(mission.date).format('L')}
                    </th>
                  </tr>
                  <tr>
                    <th>
                      {' '}
                      {(mission.link === undefined || mission.link === '') ? <br />
                        : (
                          <a
                            style={{ fontSize: '0.7em', fontStyle: 'italic' }}
                            target="_blank"
                            href={mission.link}
                          >
                            Click here to read more!
                          </a>
                        )}
                    </th>
                  </tr>
                </tbody>
              </Table>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }

  return (
    <Container fluid>
      <br />
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>
        {state.missionsType}
        {' '}
        Missions
      </h1>
      <Row>
        {state.loading && <h1>Loading...</h1>}
      </Row>
      <Row>
        {(state.missions === [] || state.missions === undefined) ? <ErrorCard />
          : loadMissions(state.missions)}
      </Row>
    </Container>
  );
}

export default MissionList;

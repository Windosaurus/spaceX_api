import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { Row, CardDeck, Container } from 'react-bootstrap';
import { fetchAllRockets } from '../../redux/actions/rocketsActions';
import { filterMissionsByRocket } from '../../redux/actions/missionsActions';


// Bootstrap Components
import SearchBar from '../SearchBar';
import ErrorCard from '../ErrorCard';

// Displays rockets
function RocketList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets);

  useEffect(() => {
    async function getRockets() {
      dispatch(fetchAllRockets());
    }
    getRockets().then((r) => console.log(r));
  }, []);

  return (
    <Container>
      <Row>
        <SearchBar pageType="rockets" />
      </Row>
      <Row>
        {state.loading && <h1>Loading...</h1>}
      </Row>
      <Row>
        {(state.rockets === [] || state.rockets === undefined) ? <ErrorCard />
          : (
            <CardDeck className="card_container">
              {state.rockets.map((rocket, index) => (
                <Card
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch(filterMissionsByRocket(rocket.name))}
                  bg="dark"
                  text="white"
                  className="card_item"
                  key={index}
                >
                  <Card.Img variant="top" src={rocket.img} id="card_img" />
                  <Card.Body style={{ paddingBottom: '0', paddingTop: '0.25' }}>
                    <Card.Title style={{ textAlign: 'center', fontSize: '1em' }}>{rocket.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </CardDeck>
          )}
      </Row>
    </Container>
  );
}

export default RocketList;

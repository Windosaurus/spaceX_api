import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import { filterMissionsBySearch } from '../redux/actions/missionsActions';
import { filterHistoryBySearch } from '../redux/actions/historyActions';

function SearchBar({ pageType }) {
  const dispatch = useDispatch();

  let pageTitle;
  let searchPlaceHolder;
  switch (pageType) {
    case 'rockets':
      pageTitle = 'SpaceX Rockets';
      searchPlaceHolder = 'Search Missions...';
      break;
    case 'history':
      pageTitle = 'Historical Events Timeline';
      searchPlaceHolder = 'Search Historical Events...';
      break;
    default:
      pageTitle = 'SpaceX Rockets';
      searchPlaceHolder = 'Search Missions...';
  }

  function onSearchChange(event) {
    switch (pageType) {
      case 'rockets':
        dispatch(filterMissionsBySearch(event.target.value));
        break;
      case 'history':
        dispatch(filterHistoryBySearch(event.target.value));
        break;
      default:
        dispatch(filterMissionsBySearch(event.target.value));
    }
  }

  return (
    <Container>
      <br />
      <Row>
        <Col>
          <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>
            {' '}
            { pageTitle }
          </h1>
        </Col>
        <Col>
          <Form style={{
            minWidth: '50%', position: 'absolute', right: '0px', borderRadius: '0',
          }}
          >
            <Form.Control onChange={onSearchChange} placeholder={searchPlaceHolder} />
          </Form>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default SearchBar;

// Imports
import React, { useEffect } from 'react';
import { Badge, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ErrorCard from '../ErrorCard';
import SearchBar from '../SearchBar';
// Redux Imports
import { fetchAllHistory } from '../../redux/actions/historyActions';
// Timeline Imports
import 'react-vertical-timeline-component/style.min.css';
import Moment from 'moment';


function HistoryData() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.history);

  useEffect(() => {
    async function getHistory() {
      dispatch(fetchAllHistory());
    }

    getHistory().then((r) => console.log('History Data', r));
  }, []);

  function loadHistory(historyList) {
    let searchFilter;
    let eventCount = 0;
    let toDisplayMatchedEvents = false;

    if (state.historyFilter !== undefined && state.historyFilter !== '') {
      searchFilter = state.historyFilter.toLowerCase();
      toDisplayMatchedEvents = true;
    } else {
      searchFilter = '';
    }

    const filteredHistory = [];
    for (let i = 0; i < historyList.length; i++) {
      const historyTitle = historyList[i].title.toLowerCase();
      const historyDate = Moment(historyList[i].date).format('L');
      const historyDetails = historyList[i].details.toLowerCase();

      if (historyTitle.includes(searchFilter) || historyDate.includes(searchFilter) || historyDetails.includes(searchFilter)) {
        filteredHistory.push(historyList[i]);
        eventCount += 1;
      }
    }

    console.log('Filtered history', filteredHistory);

    return (
      <Container>
        {toDisplayMatchedEvents === false
          ? (
            <h5>
              All events
              {' '}
              <Badge variant="secondary">{eventCount}</Badge>
            </h5>
          )
          : (
            <h5>
              Matched Results
              {' '}
              <Badge variant="secondary">{eventCount}</Badge>
            </h5>
          )}
        <VerticalTimeline>
          {filteredHistory.map((event) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(107,73,169)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(107,73,169)' }}
              date={Moment(event.date).format('L')}
              iconStyle={{ background: 'rgb(107,73,169)', color: 'rgb(223,223,223)' }}
            >
              <h3 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>{event.title}</h3>
              <p>{event.details}</p>
              <br />
              {(event.link === undefined || event.link === '') ? <br />
                : (
                  <a style={{ color: 'white', fontStyle: 'italic' }} target="_blank" href={event.link}>
                    Click
                    here to read more!
                  </a>
                )}
              <br />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    );
  }

  return (
    <Container>
      <br />
      <Row>
        <SearchBar pageType="history" />
      </Row>
      <br />
      {(state.historyList === [] || state.historyList === undefined)
        ? <ErrorCard /> : loadHistory(state.historyList)}
    </Container>
  );
}

export default HistoryData;

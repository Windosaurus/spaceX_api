import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ErrorCard from '../components/ErrorCard';
import { fetchCompanyInfo } from '../redux/actions/aboutActions';


const AboutPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.about);

  useEffect(() => {
    function getCompanyInfo() {
      dispatch(fetchCompanyInfo());
    }
    getCompanyInfo();
  }, []);

  return (

    <Container fluid>
      { (state.companyInfo === '' || state.companyInfo === undefined) ? <ErrorCard />
        : (
          <Jumbotron>
            <Container fluid>
              <Row>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>About SpaceX</h1>
              </Row>
              <Row>
                <p>{state.companyInfo.summary}</p>
              </Row>
              <br />
              <Row>
                <br />
                <Table style={{ textAlign: 'center' }} borderless hover>
                  <thead>
                    <tr>
                      <th style={{ fontSize: '1.3em' }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        CEO:
                        {state.companyInfo.ceo}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        CTO:
                        {state.companyInfo.cto}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        COO:
                        {state.companyInfo.coo}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Employees:
                        {state.companyInfo.employees}
                        {' '}
                        person(s)
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Valuation: $
                        {state.companyInfo.valuation}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Vehicles:
                        {state.companyInfo.vehicles}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Launch Sites:
                        {state.companyInfo.launch_sites}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Test Sites:
                        {state.companyInfo.test_sites}
                      </th>
                    </tr>
                    <tr>
                      <th style={{ fontSize: '0.8em' }}>
                        Address:
                        {state.companyInfo.headquarters.address}
                        ,
                        {state.companyInfo.headquarters.city}
                        ,
                        {state.companyInfo.headquarters.state}
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Jumbotron>
        )}

      <br />
    </Container>
  );
};

export default AboutPage;

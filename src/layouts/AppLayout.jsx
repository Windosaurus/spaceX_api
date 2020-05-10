import React from 'react';
import './AppLayout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { renderRoutes } from 'react-router-config';
import Container from 'react-bootstrap/Container';
import NavigationBar from '../components/NavigationBar';

function App({ route }) {
  const appStyle = {
    backgroundColor: '#DFDFDF',
    fontFamily: 'Sans-serif',

  };

  return (
    <Container style={appStyle}>
      <header className="app-header">
        <NavigationBar />
        {renderRoutes(route.routes)}
      </header>
    </Container>
  );
}

export default App;

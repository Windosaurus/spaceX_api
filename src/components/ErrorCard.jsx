import Alert from 'react-bootstrap/Alert';
import React from 'react';
import Container from 'react-bootstrap/Container';

function ErrorCard() {
  return (
    <Container>
      <br />
      <Alert variant="danger">
        Something went wrong and we couldn't load the information. Click this
        <Alert.Link href="https://www.somacap.com/"> link</Alert.Link>
        {' '}
        to be redirected
        back to Soma Capital's home page.
      </Alert>
    </Container>
  );
}

export default ErrorCard;

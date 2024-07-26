import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertContainer = ({ showAlert }) => {
  if (!showAlert) return null;

  return (
    <Alert variant="info" className="alert-container" style={{fontFamily:'queen-of-camelot',fontSize:'1.5rem', wordSpacing:'7px'}}>
      Item Added to Cart
    </Alert>
  );
};

export default AlertContainer;

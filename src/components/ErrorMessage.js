import React from "react";
import { Button, Alert } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { getImagesRequest } from '../redux/actions/actionCreators';
import '../styles/errorMessage.css';

const ErrorMessage = ({ error }) => {
  const dispatch = useDispatch();

  const handleErrorClick = (event) => {
    event.preventDefault();
    dispatch(getImagesRequest());
  }

  return (
    <>
      <div className="error-container">
        <Alert variant="danger" show={error}>
          <Alert.Heading>Oops! You got an error!</Alert.Heading>
          <p>Click here to try again.</p>
          <Button 
            variant="danger"
            size="lg"
            onClick={handleErrorClick}
          >
            Ok
          </Button>
        </Alert>
      </div>
    </>
  )
}

export default ErrorMessage;
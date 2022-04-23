import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/photo.css';
import ImageContent from "../components/ImageContent";
import { getImageDetails } from '../redux/actions/actionCreators';
import Preloader from '../components/Preloader';
import ErrorMessage from '../components/ErrorMessage';

const Photo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { image, loading, error } = useSelector(state => state.imageDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getImageDetails(id));
  }, [dispatch, id])

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate("/");
  }

  if (loading) {
    return (
      <>
        <div className="photo-pg__loading">
          <Preloader />
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <div className="photo-pg__error">
          <div className="photo-pg__nav-wrapper">
            <div>
              <Button 
                variant="outline-danger" 
                size="lg"
                onClick={handleBackClick}
              >
                Go Back
              </Button>
            </div>
          </div>
          <ErrorMessage />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="photo-pg__nav-wrapper">
        <div>
          <Button 
            variant="outline-danger" 
            size="lg"
            onClick={handleBackClick}
          >
            Go Back
          </Button>
        </div>
        <h1 className="photo-pg__title">{`Photo by ${image.author}`}</h1>
      </div>
      <Container>
        <Row>
          <Col lg="7">
            <Image
              src={image.download_url}
              width="100%"
              rounded
            />
          </Col>
          <Col>
            <ImageContent image={image} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Photo;
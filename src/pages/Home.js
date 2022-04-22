import React, { useEffect } from "react";
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { category } from '../data';
import GalleryItem from "../components/GalleryItem";
import '../styles/home.css';
import { useDispatch, useSelector } from "react-redux";
import { getImagesRequest } from '../redux/actions/actionCreators';
import Preloader from '../components/Preloader';
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const { images, loading, error } = useSelector(state => state.gallery);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getImagesRequest());
  }, [dispatch])

  if (loading) {
    return (
      <>
        <h1 className="main-pg__title">Gallery</h1>
        <div className="main-pg__loader">
          <Preloader />
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <h1 className="main-pg__title">Gallery</h1>
        <ErrorMessage error={error} />
      </>
    )
  }

  return (
    <>
      <h1 className="main-pg__title">Gallery</h1>
      <Tab.Container id="left-tabs" defaultActiveKey={category[0].id}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {
                category.map(item => 
                  <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>
                  </Nav.Item>
                )
              }
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {
                category.map(item => (
                  <Tab.Pane eventKey={item.id} key={item.id}>
                    <div className="tab-list">
                      {
                        images.length > 0 && images.map(image => image.category === item.name && (
                          <GalleryItem key={image.id} photo={image} />
                        ))
                      }
                    </div>
                  </Tab.Pane>
                ))
              }
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default Home;
import React from "react";
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { category, photos } from '../data';
import GalleryItem from "../components/GalleryItem";
import '../styles/home.css';

const Home = () => {
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
                        photos && photos.map(photo => photo.category === item.name && (
                          <GalleryItem key={photo.id} photo={photo} />
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
import React from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import '../styles/about.css';
import avatar from '../assets/images/about.jpeg';

const About = () => {
  const skills = ['JavaScript', 'React', 'Redux', 'HTML', 'CSS', 'SCSS, Less', 'AJAX', 'Webpack', 'Git', 'Figma'];

  return (
    <>
      <div className="about-pg__wrapper">
        <h1 className="about-pg__title">About</h1>
        <section className="about-pg__intro">
          <Row>
            <Col lg="4" className="d-flex justify-content-center align-items-center">
              <Image
                src={avatar}
                width="200"
                height="200"
                roundedCircle
              />
            </Col>
            <Col className="m-auto">
              <div className="about-pg__content">
                <div className="about-pg__content-name">
                  <h3>Asotikova Svetlana</h3>
                  <span>Front-end Developer</span>
                </div>
                <div className="about-pg__content-contacts">
                  <div className="about-pg__content-location">
                    <p>Location</p>
                    <p>Tambov, Russia</p>
                  </div>
                  <div className="about-pg__content-phone">
                    <p>Phone</p>
                    <p>+7 920 236-96-42</p>
                  </div>
                  <div className="about-pg__content-email">
                    <p>Email</p>
                    <p>
                      <a href="mailto:asotikova.sv@gmail.com">asotikova.sv@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="row-wrap about-pg__summary">
          <Row>
            <Col lg="4">
              <div className="row-wrap__content about-pg__summary-content">
                <h3>About me</h3>
                <span>In few words</span>
              </div>
            </Col>
            <Col className="m-auto">
              <p>I'm a Junior Frontend Developer. I am currently working with some projects at my work and develop pet-projects at free time. My goal is to get more knowledge in Frontend Development and improve my skills all the time.</p>
            </Col>
          </Row>
        </section>
        <section className="row-wrap about-pg__skills">
          <Row>
            <Col lg="4">
              <div className="row-wrap__content about-pg__skills-content">
                <h3>Skills</h3>
                <span>In progress</span>
              </div>
            </Col>
            <Col className="m-auto">
              {
                skills.map(item => <Badge pill bg="danger" key={item}>{item}</Badge>)
              }
            </Col>
          </Row>
        </section>
        <section className="row-wrap about-pg__education">
          <Row>
            <Col lg="4">
              <div className="row-wrap__content about-pg__education-content">
                <h3>Education</h3>
                <span>In progress</span>
              </div>
            </Col>
            <Col className="m-auto">
              <div className="about-pg__education-wrap">
                <div className="about-pg__education-list">
                  <span>University</span>
                  <ul>
                    <li><span>Derzhavin Tambov State University, Department of Chemistry</span></li>
                  </ul>
                </div>
                <div className="about-pg__education-list">
                  <span>Courses</span>
                  <ul>
                    <li><span>JavaScript Manual (learn.javascript.ru)</span></li>
                    <li><span>JavaScript, React JS, Redux (Self-Studying)</span></li>
                    <li><span>HTML Academy</span></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  )
}

export default About;
import React from 'react';

import '../styles/home.css';

import Helmet from '../components/Helmet/Helmet';

import {motion} from 'framer-motion';

import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import heroImg from '../assets/images/hero-img.png';

import Services from '../Services/Services';

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Earum inventore autem debitis, quo nulla cum! Nihil iusto 
                  quibusdam quis iure ullam voluptatum, in, nemo odio 
                  dolorum consequuntur nulla velit est.
                </p>
                <motion.button whileTap={{scale: 1.2}}className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
    </Helmet>
  )
}

export default Home;
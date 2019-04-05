import React from 'react';
import Nav from './Nav.jsx';

const Home = (props) => {
  return (
    <div className="home-container">
      <Nav/>
      <div className="home-title">
        <div className="home-rogue">Vogue</div>
        <img className="home-r" src="/images/r.png"/>
      </div>
    </div>
  )
}

export default Home;
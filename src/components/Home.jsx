import React from 'react';
import Nav from './Nav.jsx';

const Home = (props) => {
  return (
    <>{props.isHome ?
    <div className="home-container">
      <Nav toggleIndex={props.toggleIndex}/>
      <div className="home-title">
        <div className="home-rogue title-rogue">Vogue</div>
        <img className="home-r" src="/images/r.png"/>
      </div>
    </div>
      :
      <></>
    }</>
  )
}

export default Home;
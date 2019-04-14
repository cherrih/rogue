import React from 'react';
import Nav from './Nav.jsx';

const Home = (props) => {
  return (
    <>{props.isHome ?
    <div className="home-container">
      <Nav toggleIndex={props.toggleIndex}/>
    </div>
      :
      <></>
    }</>
  )
}

export default Home;
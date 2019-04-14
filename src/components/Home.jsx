import React from 'react';
import Nav from './Nav.jsx';

const Home = (props) => {
  return (
    <>{props.isHome ?
      <div className="home-container">
        <Nav toggleIndex={props.toggleIndex} topics={props.topics} isIndex={props.isIndex}/>
      </div>
        :
      <></>
    }</>
  )
}

export default Home;
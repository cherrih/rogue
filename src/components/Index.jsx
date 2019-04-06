import React from 'react';
import Nav from './Nav.jsx';

const Index = (props) => {
  return (
    <>{ props.isIndex ?
      <div className="index-container">
        <Nav isIndex={props.isIndex} toggleIndex={props.toggleIndex}/>
        <div className="index-title">
          <img className="home-r" src="/images/r.png"/>
          <div className="title-rogue index-rogue">ogue</div>
        </div>
      </div>
      : <></>
    }</>
  )
}

export default Index;
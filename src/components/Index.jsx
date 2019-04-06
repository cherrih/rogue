import React from 'react';
import Nav from './Nav.jsx';

const Index = (props) => {
  return (
    <>{ props.isIndex ?
      <div className="index-container">
        <Nav isIndex={props.isIndex} toggleIndex={props.toggleIndex}/>
        <div className="title-rogue">Rogue</div>
      </div>
      : <></>
    }</>
  )
}

export default Index;
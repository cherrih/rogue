import React from 'react';
import Nav from './Nav.jsx';

const Index = (props) => {
  return (
    <>{ props.isIndex ?
      <div className="index-container">
        <Nav toggleIndex={props.toggleIndex}/>
      </div>
      : <></>
    }</>
  )
}

export default Index;
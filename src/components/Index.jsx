import React from 'react';
import Nav from './Nav.jsx';

const Index = (props) => {
  return (
    <>{ props.isIndex ?
      <div className="index-container">
        <Nav isIndex={props.isIndex} toggleIndex={props.toggleIndex}/>
        <div className="index-topics-container">
          {props.topics.map(topic => <div className="index-topics" key="topic">{topic}</div>)}
        </div>
        <div className="index-title">
          <img className="index-logo" src="/images/Rogue.png"/>
        </div>
      </div>
      : <></>
    }</>
  )
}

export default Index;

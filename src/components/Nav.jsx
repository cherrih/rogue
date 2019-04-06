import React from 'react';

const Nav = (props) => {
  return (
    <nav className="nav-container">
      <div className="nav-index" onClick={props.toggleIndex}>Index</div>
      <div className="nav-rogue">{props.isIndex ? <img className="index-x" onClick={props.toggleIndex} src="/images/x.png"/> :
'Rogue'}</div>
    </nav>
  )
}

export default Nav;
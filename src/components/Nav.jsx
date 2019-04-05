import React from 'react';

const Nav = (props) => {
  return (
    <nav className="nav-container">
      <div className="nav-index" onClick={props.toggleIndex}>Index</div>
      <div className="nav-rogue">Rogue</div>
    </nav>
  )
}

export default Nav;
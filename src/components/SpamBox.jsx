import React from 'react';

const SpamBox = (props) => {
  props.isSpam ? console.log('spam') : console.log('notspam');
  return (
    <div className="spambox-container">
      {props.isSpam ?
      <img src="/images/letterfromyourspambox.png"/> 
      : <></>
      }
    </div>
  )
}

export default SpamBox;
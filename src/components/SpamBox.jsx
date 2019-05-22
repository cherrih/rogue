import React from 'react';

const SpamBox = (props) => {
  props.isSpam ? console.log('spam') : console.log('notspam');
  return (
    <div className="spambox-container">
      {props.isSpam ?
      
      <img src="/images/letterfromyourspambox.png" onClick={props.toggleAbout}/> 
      : <></>
      }
    </div>
  )
}

export default SpamBox;
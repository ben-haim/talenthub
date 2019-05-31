import React from 'react';

function ShareLink({job, toggleShareLink, showShareLink}) {
  let className, text, content;

  if (showShareLink) {
    text = `https://talenthub.am/job/${job.uid}`;
    className = "button share-button expanded-button";
    content = <input {...{type: "text", className, value: text, disabled: true}} />
  } else {
    className = "button share-button"
    content = <a onClick={toggleShareLink} className={className}>Share</a>
  }

  return content;
}

export default ShareLink;

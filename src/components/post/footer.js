import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer({step, onSubmit, onBack, onConfirm}) {
  let content;
  switch(step) {
    case 1:
      content = (
        <div className="action">
          <a onClick={onSubmit} className="button">
            <FontAwesomeIcon icon="rocket"/>
            Submit
          </a>
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          <hr />
          <div className="terms">
            <p>
              By creating a new post you agree with:
              <br /><br />
              I am a part of / I represent the hiring company. Details provided above refer to the actual hiring entity.
              <br /><br />
              I understand that my listing may be removed if it involves adult content, illegitimate work opportunity, incorrect job type, or contains inappropriate language.
            </p>
          </div>
          <div className="action">
            <a onClick={onBack} className="button back">
              <FontAwesomeIcon icon="chevron-left"/>
              Back
            </a>
            <a onClick={onConfirm} className="button">
              <FontAwesomeIcon icon="check"/>
              Confirm
            </a>
          </div>
        </div>
      );
      break;
    case 3:
      content = <div></div>;
      break;
  }
  return content;
};

export default Footer;

import React from 'react';
import Spinner from 'react-spinkit';

function Header({step, message}) {
  let content;
  switch(step) {
    case 1:
      content = (
        <div className="header">
          <h1>Create a job post</h1>
          <p>
            Please fill the form according to your needs.
            Fields prefixed with "*" are required, make sure to fill them out.
            <br />
            After successful save, we will review and make it public!
          </p>
        </div>
      );
      break;
    case 2:
      content = <div></div>;
      break;
    case 3:
      if (message) {
        content = (
          <div className="header">
            <h1 className="final">
              {message}
              <span>&#x1F44B;</span>
            </h1>
          </div>
        );
      } else {
        content = <Spinner spinnerName="double-bounce" overrideSpinnerClassName="spinner" />;
      }
      break;
  }
  return content;
};

export default Header;

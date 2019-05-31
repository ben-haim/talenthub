import React from 'react';

function TextWithLabel({name, valid, value, label, placeholder, onChange}) {
  const className = !valid && 'error';

  return (
    <div className="input-group">
      <label>
        {label}
        {!valid && <span className={className}>This field is required!</span>}
      </label>
      <textarea {...{name, className, placeholder, value, onChange}} />
    </div>
  );
}

export default TextWithLabel;

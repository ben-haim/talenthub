import React from 'react';

function InputWithLabel({name, valid, label, placeholder, value, onChange}) {
  const className = !valid && 'error';

  return (
    <div className="input-group">
      <label>
        {label}
        {!valid && <span className={className}>This field is required!</span>}
      </label>
      <input type="text" {...{name, className, placeholder, value, onChange}} />
    </div>
  );
}

export default InputWithLabel;

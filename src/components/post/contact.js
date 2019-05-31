import React from 'react';

import InputWithLabel from '../base/input_with_label';

function PostContact({email, isValid, onChange}) {
  return (
    <div className="contact">
      <h1>Contact details</h1>
      <InputWithLabel {...{name: "email", valid: isValid.email, label: "Company email*", placeholder: "hiring@awesome-comp.com", value: email, onChange}}/>
    </div>
  );
}

export default PostContact;

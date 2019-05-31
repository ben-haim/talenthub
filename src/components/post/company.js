import React from 'react';

import InputWithLabel from '../base/input_with_label';
import TextWithLabel from '../base/text_with_label';
import FileUpload from '../base/file_upload';

function PostCompany({name, website, description, isValid, onChange, onImageUpload}) {
  return (
    <div className="company">
      <h1>Company details</h1>
      <div className="details">
        <div className="left">
          <InputWithLabel {...{name: "name", valid: isValid.name, label: "Company name*", placeholder: "Awesome Company", value: name, onChange}}/>
          <InputWithLabel {...{name: "website", valid: isValid.website, label: "Company website*", placeholder: "https://awesome-comp.com", value: website, onChange}}/>
        </div>
        <div className="right">
          <FileUpload {...{name: "logo", label: "Logo", onImageUpload}} />
        </div>
      </div>
      <TextWithLabel {...{name: "description", valid: true, label: "Company description", placeholder: "We are an awesome company. Our mission is to make world a better place!", value: description, onChange}} />
    </div>
  );
};

export default PostCompany;

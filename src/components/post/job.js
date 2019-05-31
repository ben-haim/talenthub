import React from 'react';

import InputWithLabel from '../base/input_with_label';
import TextWithLabel from '../base/text_with_label';

function PostJob({title, requirements, responsibilities, isValid, onChange}) {
  return (
    <div className="job">
      <h1>Job details</h1>
      <InputWithLabel {...{name: "title", valid: isValid.title, label: "Job title*", placeholder: "Javascript Rockstar!", value: title, onChange}}/>

      <TextWithLabel {...{name: "requirements", valid: isValid.requirements, label: "Job requirements", placeholder: "- 5+ years of production experience; \n- Proven experience leading a small team; \n- Excellent communication and negotiation skills; \n- Great English communication skills.", value: requirements, onChange}} />
      <TextWithLabel {...{name: "responsibilities", valid: isValid.responsibilities, label: "Job responsibilities", placeholder: "- Development of the application; \n- Team coordination; \n- Supervision of the team; \n- Code review.", value: responsibilities, onChange}} />
    </div>
  );
}

export default PostJob;

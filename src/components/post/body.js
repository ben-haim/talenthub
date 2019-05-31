import React from 'react';

import PostType from './type';
import PostCompany from './company';
import PostJob from './job';
import PostContact from './contact';

function Body({step, type, name, promo, website, logo, description, address, lat, lng, title, requirements, responsibilities, email, isValid, onTypeClick, onChange, onImageUpload, onAddressSelect}) {
  let content;
  switch(step) {
    case 1:
      content = (
        <div>
          <hr />
          <PostType {...{type, promo, onTypeClick, onChange}} />
          <PostCompany {...{name, website, description, isValid, onChange, onImageUpload}} />
          <hr />
          <PostJob {...{title, requirements, responsibilities, isValid, onChange}} />
          <hr />
          <PostContact {...{email, isValid, onChange}} />
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          <hr />
          <div className="company">
            <h1>Company details</h1>
            <div className="input-group">
              <label>
                Name
              </label>
              <p>{name}</p>
            </div>
            <div className="input-group">
              <label>
                Website
              </label>
              <p>{website}</p>
            </div>
            <div className="input-group">
              <label>
                Address
              </label>
              <p>{address}</p>
            </div>
            <div className="input-group">
              <label>
                Description
              </label>
              <p>{description}</p>
            </div>
          </div>
          <div className="job">
            <h1>Job details</h1>
            <div className="input-group">
              <label>
                Type
              </label>
              <p>{type}</p>
            </div>
            <div className="input-group">
              <label>
                Title
              </label>
              <p>{title}</p>
            </div>
            <div className="input-group">
              <label>
                Requirements
              </label>
              <p>
                {requirements.split(';').map((req, id) => <span key={id}>{req}<br /></span>)}
              </p>
            </div>
            <div className="input-group">
              <label>
                Responsibilities
              </label>
              <p>
                {responsibilities.split(';').map((resp, id) => <span key={id}>{resp}<br /></span>)}
              </p>
            </div>
          </div>
          <div className="contact">
            <h1>Contact details</h1>
            <div className="input-group">
              <label>
                Email
              </label>
              <p>{email}</p>
            </div>
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

export default Body;

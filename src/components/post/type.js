import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { OPTIONS } from '../../config/post';
import InputWithLabel from '../base/input_with_label';

function PostType({type, promo, onTypeClick, onChange}) {
  let hint;

  if (type === 'promoted') {
    hint = (
      <div className="hint">
        <p>Promoted posts include Linkedin and Facebook ads!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="type">
        <h1>Choose post type</h1>
      </div>
      <div className="description">
        <div className="orders">
          {
            OPTIONS.map(option => {
              let className = type === option.id ? 'order active' : 'order';
              return (
                <div className={className} id={option.id} key={option.id} onClick={onTypeClick}>
                  <FontAwesomeIcon id={option.id} icon={option.icon} />
                  <div className="name" id={option.id}>{option.text}</div>
                  <div className="price" id={option.id}>{option.price}</div>
                  <div className="time" id={option.id}>for 30 days</div>
                </div>
              );
            })
          }
        </div>
      </div>
      { hint }
      <div className="promo">
        <InputWithLabel {...{name: "promo", valid: true, label: "Promo code", placeholder: "Promo code here!", value: promo, onChange}}/>
      </div>
    </div>
  );
};

export default PostType;

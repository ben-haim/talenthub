import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OPTIONS } from '../config/billing';

import '../styles/billing.scss';

class BillingPage extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      step: 1,
      type: 'free'
    };
  }

  render() {
    let content;
    const onTypeClick = e => this.setState({type: e.target.id});
    const onSubmit = () => {
      this.setState({step: 2});
      window.scrollTo(0,0);
    };

    const {type, step} = this.state;

    if (step === 1) {
      content = (
        <div className="billing">
          <div className="header">
            <h1>Recruiter plans</h1>
            <p>
              When you get started with TalentHub, there are a few different plans for you to choose from.
              <br />
              Here is a breakdown of each plan and which features you will be granted for each!
            </p>
          </div>
          <hr />
          <div className="body">
            <div className="type">
              <h1>Choose a subscription plan</h1>
            </div>
            <div className="description">
              <div className="orders">
                {
                  OPTIONS.map(option => {
                    let className = type === option.id ? 'order active' : 'order';
                    let duration = option.id === 'free' ? 'forever' : 'for 30 days';

                    return (
                      <div className={className} id={option.id} key={option.id} onClick={onTypeClick}>
                        <FontAwesomeIcon id={option.id} icon={option.icon} />
                        <div className="name" id={option.id}>{option.text}</div>
                        <div className="price" id={option.id}>{option.price}</div>
                        <div className="time" id={option.id}>{duration}</div>
                        <br />
                        <div className="time">Search is limited to {option.search} people</div>
                        <div className="time">{option.invites} invites</div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="action">
            <p className="hint">*Please feel free to contact us for custom quotes.</p>
            <a onClick={onSubmit} className="button">
              Submit
            </a>
          </div>
        </div>
      )
    } else if (step === 2) {
      content = (
        <div className="billing">
          <h1 className="final">
            Thank you for subscription!
            <span>&#x1F44B;</span>
          </h1>
        </div>
      )
    }

    return content;
  }
}

export default BillingPage;

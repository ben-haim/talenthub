import React, { PureComponent } from 'react';

import Checkbox from '../base/checkbox';

class TalentStageFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lead: false,
      invited: false,
      applied: false,
      phone_screening: false,
      offer_sent: false,
      hired: false
    };
  }

  render() {
    const {lead, invited, applied, phone_screening, offer_sent, hired} = this.state;

    const handleInputChange = e => {
      let name = e.target.name;
      let value = this.state[name];
      if (value) {
        this.setState({[name]: false});
      } else {
        this.setState({[name]: true});
      }
    }

    return (
      <div className="filter">
        <h3>Stage</h3>
        <Checkbox title="Lead" name="lead" checked={lead} onChange={handleInputChange} />
        <Checkbox title="Invited" name="invited" checked={invited} onChange={handleInputChange} />
        <Checkbox title="Applied" name="applied" checked={applied} onChange={handleInputChange} />
        <Checkbox title="Phone Screening" name="phone_screening" checked={phone_screening} onChange={handleInputChange} />
        <Checkbox title="Offer Sent" name="offer_sent" checked={offer_sent} onChange={handleInputChange} />
        <Checkbox title="Hired" name="hired" checked={hired} onChange={handleInputChange} />
      </div>
    );
  }
}

export default TalentStageFilter;

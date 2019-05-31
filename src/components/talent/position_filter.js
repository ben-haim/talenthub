import React, { PureComponent } from 'react';

import Checkbox from '../base/checkbox';

class TalentPositionFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      engineer: false,
      project_manager: false,
      designer: false
    };
  }

  render() {
    const {engineer, project_manager, designer} = this.state;

    const handleInputChange = e => {
      let name = e.target.name;
      let value = this.state[name];
      this.setState({[name]: !value});
    }

    return (
      <div className="filter">
        <h3>Position</h3>
        <Checkbox title="Software Engineer" name="engineer" checked={engineer} onChange={handleInputChange} />
        <Checkbox title="Project Manager" name="project_manager" checked={project_manager} onChange={handleInputChange} />
        <Checkbox title="Designer" name="designer" checked={designer} onChange={handleInputChange} />
      </div>
    );
  }
}

export default TalentPositionFilter;

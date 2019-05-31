import React, { PureComponent } from 'react';

class Skill extends PureComponent {
  render() {
    const {skill} = this.props;

    return (
      <li>
        {skill.name}
      </li>
    );
  }
}

export default Skill;

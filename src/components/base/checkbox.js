import React, { PureComponent } from 'react';

class Checkbox extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMode: false
    };
  }

  render() {
    const {title} = this.props;

    return (
      <label>
        <input type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.props.onChange} />
        <span className="indicator"></span>
        {this.props.title}
      </label>
    );
  }
}

export default Checkbox;

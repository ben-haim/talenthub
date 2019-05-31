import React, { PureComponent } from 'react';

class JobSearch extends PureComponent {
  render() {
    const onSubmit = e => {
      e.preventDefault();
      const query = this.refs.jobSearch.value;
    };

    return (
      <form className="search-form" {...{onSubmit}}>
        <input type="text" ref="jobSearch" placeholder="Search for a skill or company"/>
      </form>
    );
  }
}

export default JobSearch;

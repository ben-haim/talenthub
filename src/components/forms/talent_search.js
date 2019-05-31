import React, { PureComponent } from 'react';

class TalentSearch extends PureComponent {
  render() {
    const onSubmit = e => {
      e.preventDefault();
      const query = this.refs.talentSearch.value;
    };

    return (
      <form className="search-form" {...{onSubmit}}>
        <input type="text" ref="talentSearch" placeholder="Search for a skill"/>
      </form>
    );
  }
}

export default TalentSearch;
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from 'react-spinkit';
import { Link } from 'react-router-dom';

import TalentItem from '../components/talent/item';
import TalentStageFilter from '../components/talent/stage_filter';
import TalentPositionFilter from '../components/talent/position_filter';

import '../styles/talents.scss';

class Talents extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.query
    };
  }

  componentDidMount() {
  }

  render() {
    const {query} = this.state;
    let talents, error, count;

    const onBillingClick = () => {};

    let talentList, talentMessage, filteredTalents;

    const onSubmit = e => {
      e.preventDefault();
      let {query} = this.state;
    };

    const onQueryChange = e => {
      e.preventDefault();
      let {value} = e.target;

      this.setState({query: value});
    };

    const onAdd = () => {}

    if (error) {
      talentList = (
        <div className="empty">
          <FontAwesomeIcon icon="exclamation" />
          <p>{error}</p>
        </div>
      )
    } else if (talents) {
      if (talents.length > 0) {
        if (count > 10) {
          talentMessage = (
            <div className="message">
              <h3 className="small">
                List is limited to 10 people, please
                <a onClick={onBillingClick} target="blank"> upgrade </a>
                to see more.</h3>
              <h3>{count} results</h3>
            </div>
          );
        } else {
          talentMessage = (
            <div className="message">
              <h3>{count} results</h3>
            </div>
          );
        }

        talentList = talents.map(talent => <TalentItem key={talent.id} {...{talent}} />);
      } else {
        talentList = (
          <div className="empty">
            <FontAwesomeIcon icon="user" />
            <p>There are no talents</p>
          </div>
        )
      }
    } else {
      talentList = <Spinner spinnerName="double-bounce" overrideSpinnerClassName="spinner" />;
    };    

    return (
      <div className="talent-view">
        <div className="left">
          <div className="search">
            <form {...{onSubmit}}>
              <input type="text" value={query} onChange={onQueryChange} placeholder="Search for a skill" />
              <FontAwesomeIcon icon="search" />
            </form>
          </div>
          <TalentStageFilter />
        </div>
        <div className="center">
          {talentMessage}
          {talentList}
        </div>
        <div className="right">
          <Link className="button" to='/add_talent'>
            <FontAwesomeIcon icon="plus"/>
            Add Talent
          </Link>
          <TalentPositionFilter />
        </div>
      </div>
    );
  }
}

export default Talents;

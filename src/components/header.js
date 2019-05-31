import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom';

import '../styles/header.scss';

class Header extends PureComponent {
  render() {
    const {name} = this.props;

    return (
      <nav className="nav-bar">
        <div className="logo">
          <Link to='/'>
            <span>Talent
              <b>Hub</b>
            </span>
          </Link>
        </div>
        <ul className="left">
          <li>
            <Link className={name === 'jobs' ? "nav-button button-active" : "nav-button"} to='/jobs'>
              <FontAwesomeIcon icon="briefcase"/>
              Jobs
            </Link>
          </li>
          <li>
            <Link className={name === 'talents' ? "nav-button button-active" : "nav-button"} to='/talents'>
              <FontAwesomeIcon icon="user-friends"/>
              Talents
            </Link>
          </li>
          <li>
            <Link className={name === 'stats' ? "nav-button button-active" : "nav-button"} to='/stats'>
              <FontAwesomeIcon icon="chart-pie"/>
              Stats
            </Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link className="primary-button" to='/post'>
              <FontAwesomeIcon icon="plus"/>
              Post Job
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Header;

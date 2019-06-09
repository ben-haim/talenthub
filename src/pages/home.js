import React, { PureComponent, Fragment } from 'react'

import SearchBox from '../components/search_box';
import Map from '../components/map';

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <SearchBox />
        <div className="main-view">
          <Map />
        </div>
      </Fragment>
    )
  }
}

export default Home
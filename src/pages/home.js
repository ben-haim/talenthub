import React, { PureComponent } from 'react';

import SearchBox from '../components/search_box';
import Map from '../components/map';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <SearchBox {...this.props} />
        <div className="main-view">
          <Map />
        </div>
      </div>
    )
  }
}

export default Home;
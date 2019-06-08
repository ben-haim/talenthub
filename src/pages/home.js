import React, { PureComponent, Fragment } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'

import SearchBox from '../components/search_box';
import Map from '../components/map';

const COMPANIES_QUERY = gql`
  query FindAllCompanies {
    allCompanies {
      data {
        name
        address
        jobs {
          data {
            title
          }
        }
      }
    }
  }
`
class Home extends PureComponent {
  componentDidMount() {
    this.props.client.query({
      query: COMPANIES_QUERY
    }).then(response => console.log(response.data))
  }

  render() {
    return (
      <Fragment>
        <SearchBox {...this.props} />
        <div className="main-view">
          <Map />
        </div>
      </Fragment>
    )
  }
}

export default withApollo(Home);
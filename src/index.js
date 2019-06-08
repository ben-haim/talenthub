import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

import App from './App'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GRAPHQL_AUTH_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

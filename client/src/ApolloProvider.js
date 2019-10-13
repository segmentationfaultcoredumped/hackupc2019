import React from 'react';
import App from './App';
import ApollClient from'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';

import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const httpLink = createHttpLink({
    uri: 'http://localhost:7000'
});

const client = new ApollClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
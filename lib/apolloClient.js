// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wp.still-bloom.my.id/graphql",
  cache: new InMemoryCache(),
});

export default client;

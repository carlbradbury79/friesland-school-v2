import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  // uri: "http://localhost:5000/graphql",
  uri: "https://friesland-twitter.herokuapp.com/graphql",
  fetch,
})

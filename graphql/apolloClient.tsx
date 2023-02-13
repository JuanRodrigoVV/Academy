import { ApolloClient, InMemoryCache, gql,} from '@apollo/client'
import { createHttpLink } from '@apollo/client'
import crossFetch from 'cross-fetch'

const httpLink = createHttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
    credentials: 'same-origin',
    fetch: crossFetch,
  });
  
  const client = new ApolloClient({
    // link: (httpLink),
    uri: 'https://strapi-production-79fd.up.railway.app/graphql',
    cache: new InMemoryCache(),
  })
  export default ApolloClient
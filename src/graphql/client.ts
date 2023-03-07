
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'


const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    link: httpLink,
    cache,
})

export default client
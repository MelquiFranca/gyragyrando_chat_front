import { ApolloClient } from '@apollo/client'
import { cache } from './cache'

const client = new ApolloClient({
    cache,
    uri: 'http://localhost:4001/graphql'
})

export default client
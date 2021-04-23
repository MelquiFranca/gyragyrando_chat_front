import { ApolloClient } from '@apollo/client'
import { cache } from './cache'

const client = new ApolloClient({
    cache,
    uri: 'http://192.168.0.105:4001/graphql'
})

export default client
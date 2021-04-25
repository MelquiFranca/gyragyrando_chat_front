import { split, HttpLink, ApolloClient } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import { cache } from './cache'

const URL_API = process.env.URL_API || '192.168.0.105:4001'
const httpLink = new HttpLink({    
    uri: `http://${URL_API}/graphql`
})
const websocket = new WebSocketLink({
    uri: `ws://${URL_API}/assinaturas`,
    options: {
        reconnect: true
    }
})
const splitLink = split(
    ({ query }) => {
        const definicao = getMainDefinition(query)
        return (
            definicao.kind === 'OperationDefinition' &&
            definicao.operation === 'subscription'
        )
    },
    websocket,
    httpLink
)
const client = new ApolloClient({
    cache,
    link: splitLink,
})
export default client
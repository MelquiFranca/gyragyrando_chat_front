import { gql } from '@apollo/client'
export const LISTA_USUARIOS_LOGADOS = gql`
    query QueryUsuarios {
        usuarios {
            id
            nome
            tipo
        }
    }
`
export const LISTA_MENSAGENS = gql`
    query QueryMensagens {
        mensagens {
            id
            conteudo
            usuario {
                nome
            }
        }
    }
`
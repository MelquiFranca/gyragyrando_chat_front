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
            data
            conteudo
            usuario {
                id
                nome
            }
        }
    }
`
export const LOGIN_USUARIO = gql`
    mutation AdicionaUsuario($loginNome: String!, $loginTipo: Boolean!, $loginId: ID)
    {
        login(nome: $loginNome, tipo: $loginTipo, id: $loginId)
        {
            id
            nome
            tipo
        }
    }
`
export const LOGOFF_USUARIO = gql`
    mutation RemoveUsuario($usuarioId: ID!)
    {
        logoff(usuarioId: $usuarioId)
        {
            id
            nome
            tipo
        }
    }
`
export const ENVIAR_MENSAGEM = gql`
    mutation EnviaMensagem($usuarioId: ID!, $conteudo: String!) {
        novaMensagem(usuarioId: $usuarioId, conteudo: $conteudo) {
            id
            conteudo
            data
            usuario {
                id
                nome
                tipo
            }
        }
    }
`
export const LOGADO = gql`
    query Logado {
        me {
            id
            nome
            tipo
        }
    }
`
export const SUBSCRIPTION_NOVO_USUARIO = gql`
    subscription NovoUsuarioLogado {
        entradaUsuario {
            id
            nome
            tipo
        }
    }
`
export const SUBSCRIPTION_SAIU_USUARIO = gql`
    subscription UsuarioDesLogado {
        saidaUsuario {
            id
            nome
            tipo
        }
    }
`
export const SUBSCRIPTION_NOVA_MENSAGEM = gql`
    subscription NovaMensagemEnviada {
        atualizarMensagens {
            conteudo
            usuario {
                id
                nome
            }
        }
    }
`
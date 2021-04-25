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
                id
                nome
            }
        }
    }
`
export const LOGIN_USUARIO = gql`
    mutation AdicionaUsuario($loginNome: String!, $loginTipo: Boolean!)
    {
        login(nome: $loginNome, tipo: $loginTipo)
        {
            id
            nome
            tipo
        }
    }
`
export const LOGOFF_USUARIO = gql`
    mutation AdicionaUsuario($loginId: ID!)
    {
        login(usuarioId: $loginId)
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
            conteudo
            usuario {
                id
                nome
                tipo
            }
        }
    }
`
export const SUBSCRIPTION_NOVO_USUARIO = gql`
    subscription NovoUsuarioLogado {
        entradaUsuario {
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
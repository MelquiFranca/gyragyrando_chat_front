import React from 'react'
import Mensagem from '../Mensagem'
import './index.css'

const MENSAGENS = [
    {
        conteudo: `Olá tudo bem? Eu estou!`, 
        nome: "Toca Gado"
    },
    {
        conteudo: `Sim, bem? E vc?`, 
        nome: "Fulano de Tal"
    },
    {
        conteudo: `Também estou!`, 
        nome: "Melqui"
    },
    {
        conteudo: `Oi...Estou bem tbm!
        Tem Certeza disso? Ontem você não me parecia muito bem.
        Espero que consiga fazer tudo que planejou para 
        essa semana no trabalho. como posso ajuda-lo?
        Oi...Estou bem tbm!
        Tem Certeza disso? Ontem você não me parecia muito bem.
        Espero que consiga fazer tudo que planejou para 
        essa semana no trabalho. como posso ajuda-lo?
        Oi...Estou bem tbm!
        Tem Certeza disso? Ontem você não me parecia muito bem.
        Espero que consiga fazer tudo que planejou para 
        essa semana no trabalho. como posso ajuda-lo?`, 
        nome: "Jaca Gol"
    },
]
const CaixaMensagens = () => {
    return (<div className="caixa-mensagens">
        {MENSAGENS.map(mensagem => <Mensagem mensagem={mensagem}/>)}
    </div>)
}

export default CaixaMensagens
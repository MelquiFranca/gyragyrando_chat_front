import React from 'react'
import Mensagem from '../Mensagem'
import './index.css'

const CaixaMensagens = ({ mensagens }) => {
    return (<div className="caixa-mensagens">
        {mensagens.map((mensagem, index) => <Mensagem mensagem={mensagem} key={index}/>)}
    </div>)
}

export default CaixaMensagens
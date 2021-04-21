import React, { useState, useEffect } from 'react'
import './index.css'

const Mensagem = ({mensagem}) => {
    const [logado, setLogado] = useState(false)
    useEffect(() => {
        const usuarioLogado = localStorage.getItem('nome')
        if(mensagem?.nome)
            setLogado(mensagem.nome === usuarioLogado)
    }, [mensagem])

    return (<div className={`mensagem ${logado ? 'mensagem-logado' : 'mensagem-outros'}`}>
        <div className={`usuario-mensagem ${logado ? 'usuario-mensagem-logado' : 'usuario-mensagem-outros'}`}>{mensagem?.nome}</div>
        <div className="conteudo-mensagem">{mensagem?.conteudo}</div>
    </div>)
}

export default Mensagem
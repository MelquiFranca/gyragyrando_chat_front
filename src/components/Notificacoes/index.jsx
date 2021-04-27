import React, { useState, useEffect } from 'react'
import Usuario from '../Usuario'
import './index.css'

const Notificacoes = ({tipo, dados}) => {
    const [visivel, setVisivel] = useState(true)
    setTimeout(() => {
        setVisivel(false)
    }, 3000)

    return (<>
    {visivel && 
        <div className="notificacao">
            <div className="notificacao-tipo">{tipo === 'login' ? 'Entrou no Chat:' : tipo === 'logoff' ? 'Saiu do Chat:' : ''}</div>
            <Usuario usuario={dados} login={true}/>
        </div>
    }
    </>)
}

export default Notificacoes

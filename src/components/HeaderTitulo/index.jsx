import React, {useState, useEffect} from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import { LOGOFF_USUARIO } from '../../querys'
import './index.css'

const HeaderTitulo = ({telaLogin=false, history}) => {

    const [usuarioLogoff, {loading: loadingLogoff, error: errorLogoff}] = useMutation(LOGOFF_USUARIO, {
        usuarioId: localStorage.getItem('id')
    })

    const handleClickSair = () => {
        const idUsuarioLogado = localStorage.getItem('id')        
        usuarioLogoff({
            variables: {
                usuarioId: idUsuarioLogado
            }
        })

        if(!loadingLogoff && !errorLogoff) {
            localStorage.removeItem('id')
            localStorage.removeItem('nome')
            localStorage.removeItem('tipo')
            history.push('')
        }
    }
    
    return (<div className="header">
        <h1 className="titulo">
            GYRANDO
        </h1>
        {!telaLogin && <button 
            onClick={_=> handleClickSair()}
            className="botao cor-secundaria botao-logoff"
        >
            <i className="fa fa-close"></i>
        </button>}
    </div>)
}

export default HeaderTitulo
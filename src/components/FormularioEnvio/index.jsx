import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import './index.css'
import { ENVIAR_MENSAGEM } from '../../querys'
const FormularioEnvio = () => {
    const [inputTexto, setInputTexto] = useState('')
    const [enviarMensagem, { loading, error }] = useMutation(ENVIAR_MENSAGEM)

    const handleClickEnviar = () => {
        enviarMensagem({ 
            variables: {
                conteudo: inputTexto,
                usuarioId: localStorage.getItem('id')
            }
        })

        if(error)
            alert(error.errors[0].message)
    }

    return (<div className="formulario-envio">
        <textarea 
            id="" 
            cols="60" 
            rows="3"
            placeholder="Digite sua mensagem..."
            className="text-area-mensagem"
            onChange={({value}) => setInputTexto(value)}
            value={inputTexto}
        ></textarea>
        <button 
            className="botao cor-primaria botao-enviar"
            onClick={ _=> handleClickEnviar()}
        >
            <i className="fa fa-paper-plane"/>            
        </button>
    </div>)
}

export default FormularioEnvio
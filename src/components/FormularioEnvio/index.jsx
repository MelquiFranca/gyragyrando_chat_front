import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import './index.css'
import { ENVIAR_MENSAGEM } from '../../querys'
const FormularioEnvio = () => {
    const [inputTexto, setInputTexto] = useState('')
    const [enviarMensagem, { loading, error }] = useMutation(ENVIAR_MENSAGEM, {
        onCompleted: dados => console.log(dados),
        // onError: error => alert('Ocorreu um erro ao enviar a Mensagem.')
    })

    const handleClickEnviar = () => {
        enviarMensagem({ 
            variables: {
                conteudo: inputTexto,
                usuarioId: localStorage.getItem('id')
            }
        })
    }

    return (<div className="formulario-envio">
        <textarea 
            id="" 
            cols="60" 
            rows="3"
            placeholder="Digite sua mensagem..."
            className="text-area-mensagem"
            onChange={({target}) => setInputTexto(target.value)}
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
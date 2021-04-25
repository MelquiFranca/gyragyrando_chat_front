import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import './index.css'
import { ENVIAR_MENSAGEM } from '../../querys'
const FormularioEnvio = () => {
    const [inputTexto, setInputTexto] = useState('')
    const [enviarMensagem, { loading, error }] = useMutation(ENVIAR_MENSAGEM, {
        // onCompleted: dados => ,
        onError: erro => console.log(erro)
    })
    const handleClickEnviar = (e) => {
        e.preventDefault()
        const idUsuarioLogado = localStorage.getItem('id')
        enviarMensagem({ 
            variables: {
                conteudo: inputTexto,
                usuarioId: idUsuarioLogado
            }
        })

        setInputTexto('')
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
            onClick={ e=> handleClickEnviar(e)}
        >
            <i className="fa fa-paper-plane"/>
        </button>
    </div>)
}

export default FormularioEnvio
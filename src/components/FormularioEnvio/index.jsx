import React, { useState, useEffect } from 'react'
import './index.css'

const FormularioEnvio = () => {
    const [inputTexto, setInputTexto] = useState('')
    const handleClickEnviar = () => {
        alert('Enviou')
    }

    return (<form className="formulario-envio">
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
            onClick={ _=> handleClickEnviar}
        >
            <i className="fa fa-paper-plane"/>            
        </button>
    </form>)
}

export default FormularioEnvio
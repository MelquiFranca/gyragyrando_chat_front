import React, { useState } from 'react'
import Container from '../../components/Container'
import HeaderTitulo from '../../components/HeaderTitulo'
import './index.css'

const Login = () => {
    const [inputApelido, setInputApelido] = useState('')

    const handleClickEnviar = () => {
        alert('Enviou')
    }

    return (<>
        <HeaderTitulo />
        <Container>
            <div className="titulo-login">Login</div>
            <div className="conteudo">
                <label 
                    htmlFor="input-apelido"
                    className="label"
                >Apelido:</label>
                <input 
                    type="text" 
                    name="input-apelido"
                    className="input-texto"
                    value={inputApelido}
                    placeholder="Digite seu nickname..."
                    onChange={({value}) => setInputApelido(value)}
                />

                <button 
                    className="cor-primaria botao"
                    onClick={ _=> handleClickEnviar}
                >
                    <i className="fa fa-sign-in"/>
                    Entrar no Chat
                </button>
            </div>
        </Container>
    </>)
}

export default Login
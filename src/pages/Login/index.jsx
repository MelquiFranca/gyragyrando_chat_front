import React, { useState } from 'react'
import Container from '../../components/Container'
import HeaderTitulo from '../../components/HeaderTitulo'
import './index.css'

const Login = () => {
    const [inputApelido, setInputApelido] = useState('')
    const [inputAvatar, setInputAvatar] = useState('1')

    const handleClickLogin = () => {
        alert('Enviou')
    }

    return (<>
        <HeaderTitulo />
        <Container>
            <div className="titulo-login">Entrar no Chat</div>
            <div className="conteudo-login">
                <label 
                    htmlFor="input-apelido"
                    className="label"
                >Apelido:</label>
                <input 
                    type="text" 
                    name="input-apelido"
                    maxLength="20"
                    className="input-texto"
                    value={inputApelido}
                    placeholder="Digite seu nickname..."
                    onChange={({value}) => setInputApelido(value)}
                />

                <label htmlFor="" className="label">Avatar</label>
                <div>
                    <span className="grupo-radio-avatar">
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="1" 
                            checked={inputAvatar === '1'}
                            onChange={_=> setInputAvatar('1')}
                        /> 
                        <i className="fa fa-male cor-primaria icone-avatar"/>
                    </span>
                    <span className="grupo-radio-avatar">
                        <input 
                            type="radio" 
                            name="avatar" 
                            value="0"
                            checked={inputAvatar === '0'}
                            onChange={_=> setInputAvatar('0')}
                        /> 
                        <i className="fa fa-female cor-secundaria icone-avatar"/>
                    </span>
                </div>

                <button 
                    className="cor-primaria botao botao-login"
                    onClick={ _=> handleClickLogin()}
                >
                    <i className="fa fa-sign-in"/>
                    Entrar no Chat
                </button>
            </div>
        </Container>
    </>)
}

export default Login
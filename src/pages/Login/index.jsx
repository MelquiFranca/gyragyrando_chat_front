import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import Container from '../../components/Container'
import HeaderTitulo from '../../components/HeaderTitulo'
import { LOGIN_USUARIO } from '../../querys'
import './index.css'

const Login = ({history}) => {
    const [inputApelido, setInputApelido] = useState('')
    const [inputAvatar, setInputAvatar] = useState('1')

    const [loginUsuario, { data, loading, error }] = useMutation(LOGIN_USUARIO, {
        onCompleted: dados => {
            if(error)
                alert(error.errors[0].message)
                
            if(dados?.login) {
                localStorage.setItem('id', dados.login.id)
                localStorage.setItem('nome', dados.login.nome)
                localStorage.setItem('tipo', dados.login.tipo)
                history.push('Chat')
            }
        }
    })
    
    const handleClickLogin = () => {
        if(inputApelido.trim().length < 3) {
            alert('Favor inserir um Apelido com pelo menos 3 caracteres.')
            return
        }       

        loginUsuario({ variables: { loginNome: inputApelido, loginTipo: inputAvatar === '1' } })        
    }

    if(!loading && error) 
        return <p>
                Erro ao Acessar Conectar.
                Atualize a página par atentar novamente.
            </p>
    return (<>
        <HeaderTitulo telaLogin={true} />
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
                    onChange={({target}) => setInputApelido(target.value)}
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
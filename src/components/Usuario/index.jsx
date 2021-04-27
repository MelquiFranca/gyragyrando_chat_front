import React from 'react'
import './index.css'

const Usuario = ({usuario, login=false}) => {    
    return (<div className={login ? "avatar-login": "avatar"}>
        <i className={usuario.tipo ? `fa fa-male icone-avatar cor-primaria` : `fa fa-female icone-avatar cor-secundaria`}></i>
        <div className="nome-usuario">{usuario.nome}</div>
    </div>)
}

export default Usuario
import React, {useState, useEffect} from 'react'
import './index.css'

const HeaderTitulo = (telaLogin) => {
    const [logado, setLogado] = useState(false)

    // useEffect(() => {
        
    //     const usuario = localStorage.getItem
    //     setLogado()
    // })
    return (<div>
        <h1 className="titulo">
            GYRANDO
        </h1>
        {!telaLogin && <button className="botao cor-secundaria botao-logoff">
            <i className="fa fa-close"></i>
        </button>}
    </div>)
}

export default HeaderTitulo
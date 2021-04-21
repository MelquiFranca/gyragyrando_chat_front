import React, { useState, useEffect } from 'react'
import './index.css'

const FormularioEnvio = () => {
    const [inputTexto, setInputTexto] = useState('')
    const handleClickEnviar = () => {
        alert('Enviou')
    }

    return (<form>
        <textarea 
            id="" 
            cols="30" 
            rows="2" 
            className=""
            onChange={({value}) => setInputTexto(value)}
            value={inputTexto}
        ></textarea>
        <button 
            className="cor-primaria"
            onClick={ _=> handleClickEnviar}
        >
            <i className="fa fa-paper"/>
            teste
        </button>
    </form>)
}

export default FormularioEnvio
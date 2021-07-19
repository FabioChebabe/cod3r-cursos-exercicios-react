import React from 'react'

//exportar de forma padrao
export default props =>
    <div>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>
//o espaço e para haver o espaço entre um nome e outro
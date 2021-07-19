import React from 'react'


export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Fabio']
    const num = Math.random()
    // const gerarItens = itens => {
    //     return itens.map(item => <li>{item}</li>)//funcao map transfroma elementos de um array em outros elementos
    //     //aqui transformei componentes string em componentes jsx
    // }
    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
}
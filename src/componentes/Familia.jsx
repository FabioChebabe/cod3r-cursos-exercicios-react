import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props => 
    <div>
        <h1>Família</h1>

        {filhosComProps(props)}

        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child,{ ...props})
        })} */}
        {/* //metodo que pega os filhos que recebe e clona eles para conseguir passar propriedades para ele */}
        {/* {React.cloneElement(props.children,{ ...props})} */}
        {/* //cria um clone do objeto e passa todas as propriedades clonadas para os filhos */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome })} */}
        {/* {props.children} */}
    </div>
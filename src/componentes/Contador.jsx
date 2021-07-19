import React, { Component } from 'react'
export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    };
//Soluçao 01 - metodo cntructor com bind
//     constructor(props){
//         super(props);
//         this.maisUm = this.maisUm.bind(this);
//     }

//Soluçao 02 - Funçao arrow no onClick
// {/* <button onClick={() => this.maisUm()}>Incrementar</button> */}

//Soluçao 03 - funçao arrow
// maisUm = () =>{
//     this.props.numero++;
// }


    maisUm = () =>{
        this.setState({numero: this.state.numero + 1})
    }
    menosUm = () =>{
        this.setState({numero: this.state.numero - 1})
    }
    alterarNumero = (diferenca) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar10</button>
            </div>
        )
    }
}
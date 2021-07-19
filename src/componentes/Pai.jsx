import React from 'react'
import Filho from './Filho'

export default props => {
    // let lugarInformado = 'Nenhum';
    const notificarSaidaDoFilho = 
        lugar => alert(`liberado para ${lugar}`);
    return (
        <div>
            {/* {lugarInformado} */}
            <Filho notificarSaida = {notificarSaidaDoFilho} />
        </div>
    )
}
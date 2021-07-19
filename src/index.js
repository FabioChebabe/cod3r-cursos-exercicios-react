import React from 'react'
import ReactDOM from 'react-dom'
// // import PrimeiroComponente from './componentes/PrimeiroComponente'
// // import FamiliaSilva from './componentes/FamiliaSilva'
// // import Membro from './componentes/Membro'
// // import Familia from './componentes/Familia'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponentesClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numeroInicial={10} /> */}
      {/* <ComponenteClasse valor="Sou um componente de classe" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Pereira">
            <Membro nome = "Andre" />
            <Membro nome = "Mariana" />
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <PrimeiroComponente /> */}
  </div>
, elemento)
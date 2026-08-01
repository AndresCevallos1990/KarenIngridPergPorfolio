import React from 'react'
import InstalacionesElectricas from './Index/InstalacionesElectricas'
import Comunicaciones from './Index/Comunicaciones'
import Separador from './Extras/Separador'
import Seguridad from './Index/Seguridad'
import BtnUp from './Extras/BtnUp'

const Index = () => {
  return (
    <div className='indexComponent'>
        <InstalacionesElectricas />
        <Separador />
        <Comunicaciones />
        <Separador />
        <Seguridad />
        <BtnUp />
    </div>
  )
}

export default Index

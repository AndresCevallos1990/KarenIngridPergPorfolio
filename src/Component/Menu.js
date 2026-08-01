import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../Provider'

const Menu = () => {

  const { updateContactUs } = useContext(contexto)

  const menu = [
    { label: "Quienes somos", path: "/quienes-somos" },
    { label: "Equipamiento", path: "/equipamiento" },
    { label: "Nuestros clientes", path: "/nuestros-clientes" },
    {
      label: "Contacto",
      path: "/contacto",
      action: () => updateContactUs(prev => !prev)
    }
  ]

  return (
    <div className='menuHeader container'>
      {
        menu.map((item, index) => (
          item.action ? (
            <button
              key={index}
              onClick={item.action}
              className="menu-btn"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={index}
              to={item.path}
            >
              {item.label}
            </Link>
          )
        ))
      }
    </div>
  )
}

export default Menu
import React from 'react'

const Comunicaciones = () => {

    const array = [
        "Conectorización fibras ópticas en la Legislatura",
        "Supervisión y conectorizado de redes de fibra óptica para la empresa Solving SRL",
        "Tendido de fibra óptica para la empresa Transportadora Patagónica Don Otto en Trelew desde terminal de ómnibus hasta talleres(800 metros en plantel exterior).",
        "Tendido, fusión y medición de redes de fibra óptica en Neuquén capital destinadas a polígonos de Telefónica de Argentina S.A.",
        "Implementación de instalación eléctrica, telefonía, datos detección de intrusión e incendio, en Escuela especial N°14, Rincón de los Sauces.",
        "Implementación de sistema de seguridad y video en, Comodoro Rivadavia para, Schlumberger S.A.",
        "Readecuación de fibras ópticas y terminaciones en Bodega Chacra",
    ]
    return (
        <div className='comunicacionesContainer container '>
            <h2>COMUNICACIONES</h2>
            <strong>Nos dedicamos al desarrollo e implementación de soluciones en sistemas de comunicaciones, abarcando distintas tecnologías y adaptándonos a los requerimientos de cada proyecto.</strong>

            <ul>
                {
                    array.map((item, index) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Comunicaciones

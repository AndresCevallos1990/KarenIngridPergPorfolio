import React from 'react'
import AOS from 'aos'

const Seguridad = () => {

    AOS.init(1000)

    return (
        <div className=''>
            <div className='seguridadComponent container'>
                <h2 data-aos="fade-down">SEGURIDAD</h2>
                <section className='seguridadComponentImgSeis container'>
                    <img src='../../../img/camaraHorizontal.png' alt='' />
                </section>
                <div className='container seguridadComponentImgOcho'>
                    <img className='imgSegNormal' src='../../../img/camara.png' alt='' />
                    <section className='container'>
                        <span data-aos="fade-right">Hoy en día, los sistemas de videovigilancia se han convertido en una herramienta fundamental para brindar mayor tranquilidad y protección, tanto a particulares como a empresas y pequeños emprendimientos. La evolución de la tecnología ha permitido contar con cámaras de alta definición, visión nocturna, detección de movimiento y almacenamiento seguro, lo que garantiza un control más preciso y confiable de los espacios monitoreados.</span>
                        <span data-aos="fade-right">Además, existen soluciones altamente versátiles que permiten supervisar en tiempo real hogares, comercios o instalaciones industriales a través de aplicaciones móviles. Esto brinda la posibilidad de acceder a las imágenes desde cualquier lugar, recibir alertas ante eventos sospechosos y mantener un control constante, incluso a distancia, mejorando significativamente la seguridad y la capacidad de respuesta.</span>
                        <strong data-aos="fade-right">Por ello, nuestra empresa se encuentra preparada para afrontar cualquier necesidad planteada por el cliente, ofreciendo asesoramiento, diseño e instalación de sistemas adaptados a cada situación. Trabajamos con equipamiento de calidad y nos enfocamos en brindar soluciones eficientes, confiables y fáciles de utilizar, asegurando un funcionamiento óptimo y una protección integral.</strong>
                    </section>

                </div>

            </div>

        </div>
    )
}

export default Seguridad

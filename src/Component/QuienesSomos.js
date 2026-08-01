import React from 'react'
import { Link } from 'react-router-dom';
import Separador from './Extras/Separador';
import BtnUp from './Extras/BtnUp'
const QuienesSomos = () => {

    return (
        <div className='quienesSomosComponent container'>
            <BtnUp />
            <article className='breadcrumb'>
                <Link to="/">Inicio</Link> {' > '}
                <Link to="/quienes-somos">Quienes Somos</Link>
            </article>
            <h1>QUIÉNES SOMOS</h1>
            <Separador />

            <strong>Somos una empresa dedicada a la elaboración, ejecución de obras y proyectos relacionados con las comunicaciones, seguridad y energía eléctrica.</strong>
            <section className='textImg'>
                <article>
                    <span>
                        PCE SRL, nuestra empresa, está conformada por un equipo de trabajo profesional y
                        multidisciplinario con amplia experiencia en los temas mencionados, abiertos a los
                        desafíos que así disponga la obra para su ejecución.
                        Nuestro objetivo se basa en tres parámetros fundamentales que funcionan en conjunto o individualmente.
                    </span>
                </article>
                <img src="../../img/quienesSomosImg.jpeg" alt="logo" />
            </section>


            <div>
                <h2>NUESTRO PROCESO DE TRABAJO</h2>
                <section className='trabajosSomos'>
                    <article>
                        <h3>Asesoramiento</h3>
                        <p>
                            Brindamos el asesoramiento necesario y adecuado en cada área de nuestra incumbencia, analizando en detalle las necesidades específicas de cada cliente. Evaluamos alternativas técnicas y operativas, acompañando en la toma de decisiones con un enfoque práctico, seguro y eficiente, asegurando siempre el cumplimiento de las normativas vigentes.
                        </p>
                    </article>

                    <article>
                        <h3>Proyecto</h3>
                        <p>
                            Desarrollamos cada proyecto a partir de un diseño y estudio integral, contemplando todos los aspectos técnicos, funcionales y económicos. Proponemos soluciones confiables, eficientes y viables, optimizando recursos y garantizando la correcta planificación para una ejecución ordenada y sin contratiempos.
                        </p>
                    </article>

                    <article>
                        <h3>Ejecución</h3>
                        <p>
                            Llevamos a cabo la realización del trabajo requerido, adaptando nuestra operatoria a las condiciones y exigencias de cada obra en el sitio solicitado. Contamos con el compromiso, la logística y la infraestructura necesaria para cumplir con cada etapa, desde el inicio hasta la finalización del proyecto, asegurando calidad y cumplimiento en los plazos establecidos.
                        </p>
                    </article>

                </section>
            </div>
        </div >
    )
}

export default QuienesSomos

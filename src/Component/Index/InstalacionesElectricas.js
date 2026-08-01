import React from 'react'
import AOS from 'aos'

const InstalacionesElectricas = () => {
  AOS.init(2500)
  return (
    <div>

      <div className='insElec container'>

        <div data-aos="fade-right">
          <img src='../../../img/Index/electrico.jpg' alt='' />
        </div>

        <div className='insElecData'>
          <section className='container'>
            <h3 data-aos="fade-down">INSTALACIONES ELÉCTRICAS EN MEDIA Y BAJA TENSIÓN</h3>

            <strong data-aos="fade-down">
              Llevamos a cabo todo tipo de instalaciones eléctricas en media tensión (tensiones entre 1 y 36 KV) y baja tensión (tensiones menores a 1 KV). Esto incluye comercios, plazas comerciales, alumbrados públicos, naves industriales, edificios, oficinas, etc.
            </strong>

            <h5 data-aos="fade-down">
              REDES DE DISTRIBUCIÓN
            </h5>

            <p data-aos="fade-right">Realizamos instalaciones de sistemas de distribución de energía eléctrica, diseñadas para garantizar un suministro seguro, eficiente y continuo. Estas redes pueden ser tanto aéreas como subterráneas, abarcando instalaciones en media y baja tensión según las necesidades específicas de cada proyecto.</p>
            <p data-aos="fade-right">Nos encargamos del diseño, planificación y ejecución de las redes, contemplando factores como el entorno, la demanda energética y las normativas vigentes. Aplicamos soluciones técnicas adecuadas para optimizar el rendimiento del sistema y asegurar su durabilidad en el tiempo.</p>
            <p data-aos="fade-right">Trabajamos en distintos tipos de obras, desde desarrollos urbanos y zonas comerciales hasta proyectos industriales, adaptando cada instalación a las condiciones del lugar y asegurando altos estándares de calidad en cada etapa del proceso.</p>

          </section>
        </div>
      </div>

      <div className='insElecOcho container'>
        <h3 data-aos="fade-down">INSTALACIONES ELÉCTRICAS EN MEDIA Y BAJA TENSIÓN</h3>

        <strong data-aos="fade-down">
          Llevamos a cabo todo tipo de instalaciones eléctricas en media tensión (tensiones entre 1 y 36 KV) y baja tensión (tensiones menores a 1 KV). Esto incluye comercios, plazas comerciales, alumbrados públicos, naves industriales, edificios, oficinas, etc.
        </strong>

        <div className='imgSeisCientos' data-aos="fade-right">
          <img src='../../../img/Index/foto004.jpg' alt='' />
        </div>

        <section className='insElecOchoGridOcho container'>
          <div data-aos="fade-right">
            <img src='../../../img/Index/electrico.jpg' alt='' />
          </div>

          <div>
            <h5 data-aos="fade-down">
              REDES DE DISTRIBUCIÓN
            </h5>

            <p data-aos="fade-right">Realizamos instalaciones de sistemas de distribución de energía eléctrica, diseñadas para garantizar un suministro seguro, eficiente y continuo. Estas redes pueden ser tanto aéreas como subterráneas, abarcando instalaciones en media y baja tensión según las necesidades específicas de cada proyecto.</p>
            <p data-aos="fade-right">Nos encargamos del diseño, planificación y ejecución de las redes, contemplando factores como el entorno, la demanda energética y las normativas vigentes. Aplicamos soluciones técnicas adecuadas para optimizar el rendimiento del sistema y asegurar su durabilidad en el tiempo.</p>

          </div>
        </section>
        <p data-aos="fade-right">Trabajamos en distintos tipos de obras, desde desarrollos urbanos y zonas comerciales hasta proyectos industriales, adaptando cada instalación a las condiciones del lugar y asegurando altos estándares de calidad en cada etapa del proceso.</p>
      </div>


    </div>
  )
}

export default InstalacionesElectricas

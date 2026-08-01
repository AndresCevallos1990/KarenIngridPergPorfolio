import React from 'react'
import { Link } from 'react-router-dom';
import Separador from './Extras/Separador';
import Accordion from 'react-bootstrap/Accordion';
import BtnUp from './Extras/BtnUp'
 
const Equipamiento = () => {


    const iconos = [
        {
            nombre: "Vehículos livianos",
            img: "../../img/vehiculosLivianos.png",
            elementos: [
                "Pick up 4×4 Toyota Hilux 2019",
                "Pick up 4×4 Toyota Hilux 2011",
                "Utilitario Peugeot Partner 2012"
            ]
        },
        {
            nombre: "Vehículos pesados y transporte",
            img: "../../img/vehiculosPesados.png",
            elementos: [
                "Camión tractor Mercedes Benz AXOR 1933",
                "Semi remolque SALTO 14,50MTS 2+1 1999",
                "Acoplado 800KG",
            ]
        },
        {
            nombre: "Camiones con hidrogrúa",
            img: "../../img/CamionesConHidrogrua.png",
            elementos: [
                "Mercedes Benz ACCELO 815 2018 (hidrogrúa HIDROGRUBERT N7000)",
                "Tata 609 1997 (hidrogrúa HEILA HL 4500)",
                "Mercedes Benz AXOR 1933 con hidrogrúa AMCO VEBA 817",
            ]
        },
        {
            nombre: "Maquinaria pesada",
            img: "../../img/MaquinariaPesada.png",
            elementos: [
                "Retroexcavadora New Holland B90 2009"
            ]
        },
        {
            nombre: "Equipos de energía",
            img: "../../img/EquiposDeEnergia.png",
            elementos: [
                "Grupo electrógeno nafta 5 kVA"
            ]
        },
        {
            nombre: "Fibra óptica / telecomunicaciones",
            img: "../../img/FibraOpticaTelecomunicaciones.png",
            elementos: [
                "Fusionadora de Fibra Óptica INNO IFS15",
                "OTDR SHINEWAY TECH S20AE",
                "Medidor de potencia SHINEWAY TECH OPM50A",
            ]
        },
        {
            nombre: "Instrumentos eléctricos y medición",
            img: "../../img/InstrumentosElectricos.png",
            elementos: [
                "Telurímetro y medidor de resistividad de suelos HT GEO 416",
                "Telurímetro SONEL MPI520",
                "Medidor de aislación de cables SONEL",
            ]
        },
        {
            nombre: "Seguridad eléctrica",
            img: "../../img/SeguridadElectrica.png",
            elementos: [
                "Pértiga para fusibles MT/BT LIAT",
                "Detector de tensión hasta 33kV LIAT",
                "Detector de tensión hasta 33kV EMDESA",
                "Escaleras dieléctricas (hasta 13 mts.) FERPAK",
            ]
        },
        {
            nombre: "Tendido de cables / herramientas eléctricas específicas",
            img: "../../img/TendidoDeClables.png",
            elementos: [
                "Devanadoras de cable",
                "Manga para tendido de cables subterráneos",
                "Pinzas hidráulicas para identado de terminales hasta 300 mm",
            ]
        },
        {
            nombre: "Herramientas eléctricas / mecánicas",
            img: "../../img/HerramientasEletricas.png",
            elementos: [
                "Martillo electro-neumático DeWalt 30Kg Hammer",
                "Malacate eléctrico 1000 Kg",
                "Roscadora hasta 2” SUPEREGO",
            ]
        },
        {
            nombre: "Herramientas generales",
            img: "../../img/HerramientasGenerales.png",
            elementos: [
                "Herramientas generales"
            ]
        },
        {
            nombre: "Albañilería",
            img: "../../img/Albañileria.png",
            elementos: [
                "Herramientas de albañilería"
            ]
        }
    ]

    return (
        <div className='equipamientoComponent container'>
            <article className='breadcrumb'>
                <Link to="/">Inicio</Link> {' > '}
                <Link to="/equipamiento">Equipamiento</Link>
            </article>
            <h1>EQUIPAMIENTO</h1>
            <Separador />
            <strong>
                Contamos con todo el equipamiento, para desarrollar todo tipo de trabajos en los tiempos estipulados. Con calidad y rapidez.
            </strong>

            <img className='imgEqui' src='../../img/equipamiento1.jpg' alt='' />

            <Separador />

            <section  className='equipamientoIconos'>
                <Accordion>
                    {
                        iconos?.map((item, index) => (
                            <Accordion.Item eventKey={String(index)} key={index}>

                                <Accordion.Header>
                                    <div className="headerItem">
                                        <img src={item?.img} alt={item?.nombre} />
                                        <h5>{item?.nombre}</h5>
                                    </div>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <ul>
                                        {item?.elementos?.map((el, i) => (
                                            <li key={i}>{el}</li>
                                        ))}
                                    </ul>
                                </Accordion.Body>

                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            </section>

<BtnUp />
        </div>
    )
}

export default Equipamiento

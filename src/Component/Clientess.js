import React from 'react'
import BtnUp from './Extras/BtnUp'

export const Clientess = () => {

  const clientesLogos = [
    {
      nombre: "Personal",
      logo: "../../img/marcas/personal.png",
      tareas: [
        "Construcción de nodos completos en Fibra óptica y coaxial",
        "Posteado",
        "Mantenimiento de urgencia",
        "Zanjeado Tapado Compactado con Retro excavadora 9000Km Tendido de cuatritubo Tendido de FO.",
      ]
    },
    {
      nombre: "YPF S.A.",
      logo: "../../img/marcas/ypf.png",
      tareas: [
        "Zanjeo y tendido de tritubo en plantas : Gerencia Loma de la Lata, Turbo expander, USP14, LTS1, Centenario y Almacenes Instalación, fusión y medición de fibras ópticas y redes eléctricas",
        "Instalación de cámaras de CCT",
      ]
    },
    {
      nombre: "EDERSA",
      logo: "../../img/marcas/edersa.png",
      tareas: [
        " Construcción de líneas aéreas de MT y BT",
        "Construcción de sistemas de puesta a tierra en sub estaciones y finales de línea en: General Roca, Cipolletti, Cinco Saltos, Catriel, Jacobacci, Mencue.",
        "Mantenimiento general de líneas de MT/BT.",
        "Asistencia de urgencias",
      ]
    },
    {
      nombre: "Expofrut Argentina S.A.",
      logo: "../../img/marcas/exprofrut.png",
      tareas: [
        "Construcción de nodos completos en Fibra óptica y coaxial",
        "Posteado",
        "Mantenimiento de urgencia",
        "Zanjeado Tapado Compactado con Retro excavadora 9000Km Tendido de cuatritubo Tendido de FO.",
      ]
    },
    {
      nombre: "Terminal de Servicios portuarios Patagonia Norte S.A.",
      logo: "../../img/marcas/patagoniaNorte.png",
      tareas: [
        "Cableado de toda la terminal, 10Km en fibra óptica enterrada.",
        "100 puestos en cobre.",
        "Implementación de sistemas de puesta a tierra.",
        "Implementación de sistema de control de acceso.",
      ]
    },
    {
      nombre: "Smith International Inc.",
      logo: "../../img/marcas/smith.png",
      tareas: [
        "Redes Cat 6 y fibra óptica en Neuquén capital",
        "Cambio y adecuación de cuarto de comunicaciones en Neuquén capital",
        "Redes Cat 6 y fibra óptica en Comodoro Rivadavia (Chubut)",
        "CCTV en plantas de Neuquén y Comodoro Rivadavia",
      ]
    },
    {
      nombre: "Shell.",
      logo: "../../img/marcas/shell.png",
      tareas: [
        "Redes Cat 6 y fibra óptica en planta Sierras Blancas Neuquén.",
      ]
    },
    {
      nombre: "Vigilan Securitas.",
      logo: "../../img/marcas/securitas.png",
      tareas: [
        "Implementación de sistema de video urbano para el municipio de Cipolletti: tendido de FO monomodo 96 hilos aérea por postacion del municipio, armado de nodo y red inalámbrica con radios 5,2 Ghz",
        "Implementación de sistemas de cctv en Total Austral (yac Aguada Pichana / San Roque)",
        "Mantenimiento preventivo/correctivo de sistemas de alarmas y cctv",
        "Montaje de sistemas de seguridad en General Roca",
        "Montaje de sistemas de seguridad en Cipolletti"
      ]
    },
    {
      nombre: "NOV Downhole.",
      logo: "../../img/marcas/Nov.png",
      tareas: [
        "Montaje electromecánico de toda la base en el PIN con una potencia de 90KVA",
        "Construcción de zanjas, y cámaras subterráneas para tendido de cables",
        "Tendido de bandejas portacables",
        "Armado de tableros principales y secundarios",
      ]
    },
    {
      nombre: "Moño Azul.",
      logo: "../../img/marcas/monoAzul.png",
      tareas: [
        "Megado de cables subterráneos en diversas plantas de la empresa",
        "Cableado de energía y datos, cobre CAT 6 y F.O.",
        "Sistema de video para aduana AFIP, Vista Alegre.",
      ]
    },
    {
      nombre: "Altec S.E.",
      logo: "../../img/marcas/altec.png",
      tareas: [
        "Cableado energía y datos, cobre CAT 5, CAT 6 y F.O. distintos punto de la provincia de Río Negro",
        "Implementación del sistema de 911 de la provincia de Rio Negro",
        "Mantenimiento preventivo – correctivo mástiles de la provincia de Río Negro. Medanito S.A.",
        "Reconversión total de la instalación eléctrica de la base de Neuquén",
        "Fusiones y mediciones de fibra óptica",
        "Implementación de sistema de CCTV"
      ]
    },
    {
      nombre: "Ejército Argentino.",
      logo: "../../img/marcas/ejercitoArg.png",
      tareas: [
        "Fortín Confluencia, armado de 8 troncales de FO 30 hilos por postación existente totalizando 5000mts.",
        "Enlace de 300 mbps hasta el comando en la zona del Alto Neuquén.",
        "Comando del Ejercito tendido de troncales de FO 30 hilos por ductos",
        "Compañía de inteligencia tendido de troncales de FO 30 hilos por ductos",
        "Implementación de sistema de puesta a tierra y pararrayos.",
        "Construcción del nuevo Data Center.",
        "Cambio y vuelco de Central telefónica."
      ]
    },
    {
      nombre: "Central térmica Termoroca.",
      logo: "../../img/marcas/centralTermica.png",
      tareas: [
        "Tendido de troncales de FO y cables multipar por trincheras, vinculando caseta de radio, oficinas, taller y bascula.",
        "Cambio y vuelco de Central telefónica.",
        "Asistencia con camiones con hidrogruas",
      ]
    },
    {
      nombre: "Transcomahue S.A.",
      logo: "../../img/marcas/transComahue.png",
      tareas: [
        "Enlace entre central térmica Alto Valle (Neuquen) – Cipolletti.",
        "Red eléctrica y datos en sede central (Cipolletti).",
      ]
    }

  ]

  const otrosClientes = [
    "Paraje Laguna Blanca 2017.",
    "Adjudicación de Licitación Pública mejora Baja Tención y Alumbrado Público",
    "Paraje Pilquiniyeu del Limay 2017.",
    "Adjudicación de Licitación Pública mejora Baja Tención y Alumbrado Público",
    "Paraje Colan Conhue 2017.",
    "Adjudicación de Licitación Privada mejora Baja Tención y Alumbrado Público",
    "Paraje Naupa Huen 2017.",
    "Adjudicación de Concurso de Precios Nueva red de distribución de Energía Eléctrica en Paraje Naupa Huen 2017.",
    "Sistema de CCTV en ET General Roca 2017.",
    "Adjudicación de Concurso de Precios Nueva red de distribución en BT Pilares de EE y AP EN Paraje Chacay Huarruca 2018.",
    "Adjudicación de Concurso de Precios Nueva red de distribución en BT Pilares de EE y AP EN Paraje Cañadon Chileno 2018.",
    "Montaje de estructura de refuerzo y Bandeja para la base de TP N°2 ET General Roca 2018.",
    "Adjudicación de Concurso de Precios Extensión LBT y AP Paraje Naupa Huen 2018.",
    "Adjudicación de Concurso de Precios Extensión LBT y AP Paraje Aguada Guzman 2018.",
    "Policía de Río Negro",
    "Implementación de data center en Viedma",
    "Mantenimiento sub estaciones de media tensión H. Canale.",
    "Armados y redistribución de cargas en tablero se frigorífico de H. Canale, para alimentar 4 compresores: 3 de 75cv y 1 de 110cv.",
    "Automatización nuevo sistema de rieles, transportadoras de cajas embaladas",
    "Implementación de 20 aulas informáticas para la provincia de Río Negro (Sierra Grande, Pilcaniyeu, Comallo, Cervantes, Cinco Saltos, Allen, General Roca, Fernandez Oro, Ing. Huergo)",
    "Supervisión y conectorizado de redes de fibra óptica para la empresa Solving SRL",
    "Tendido de fibra óptica para la empresa Transportadora Patagónica Don Otto en Trelew desde terminal de ómnibus hasta talleres (800 metros en plantel exterior).",
    "Tendido, fusión y medición de redes de fibra óptica en Neuquen capital destinadas a polígonos de Telefónica de Argentina S.A.",
    "Implementación de instalación eléctrica, telefonía, datos detección de intrusión e incendio, en Escuela especial N°14, Rincón de los Sauces.",
    "Implementación de sistema de seguridad y video en, Comodoro Rivadavia para, Schlumberger S.A.",
    "Readecuación de fibras ópticas y terminaciones en Bodega Chacra",
  ]


  return (
    <section className="clientes container">
      <h2>NUESTROS CLIENTES</h2>

      <div className="clientes-grid">
        {clientesLogos.map((cliente, index) => (
          <div className="card" key={index}>

            <div className="card-header">
              <img src={cliente.logo} alt={cliente.nombre} />
            </div>

            <div className="card-body">
              <h3>{cliente.nombre}</h3>

              <ul>
                {cliente.tareas.map((tarea, i) => (
                  <li key={i}>{tarea}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      <h2 className='otrosClientesHDos'>OTROS CLIENTES</h2>

      <div className="otrosClientes">
        {
          otrosClientes.map((item, index) => (
            <div>
              <strong>{item}</strong>
            </div>
          ))
        }
      </div>
      <BtnUp />
    </section>
  )




}

import Inicio from '../componentes/secciones/Inicio'
import Cinta from '../componentes/secciones/Cinta'
import PorQue from '../componentes/secciones/PorQue'
import ResumenClases from '../componentes/secciones/ResumenClases'
import ResumenPlanes from '../componentes/secciones/ResumenPlanes'
import HorarioContacto from '../componentes/secciones/HorarioContacto'
import Galeria from '../componentes/secciones/Galeria'
import Testimonios from '../componentes/secciones/Testimonios'
import Instagram from '../componentes/secciones/Instagram'

export default function InicioPagina() {
  return (
    <>
      <Inicio />
      <Cinta />
      <PorQue />
      <ResumenClases />
      <ResumenPlanes />
      <HorarioContacto />
      <Galeria />
      <Testimonios />
      <Instagram />
    </>
  )
}

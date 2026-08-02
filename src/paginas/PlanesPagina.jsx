import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import Planes from '../componentes/secciones/Planes'
import { Link } from 'react-router-dom'

export default function PlanesPagina() {
  return (
    <>
      <CabeceraPagina
        miga="Planes"
        titulo="Planes de membresía"
        texto="Precios claros, sin letra pequeña y sin permanencia: si no es tu sitio, te vas cuando quieras."
      />
      <Planes cabecera={false} />

      <section className="seccion">
        <div className="contenedor">
          <div className="enlace-pagina enlace-pagina--centrado">
            <span className="sobre-titulo">¿Aún con dudas?</span>
            <h2 className="planes-cabecera-lista__titulo">
              Ven a conocernos sin compromiso
            </h2>
            <p className="planes-cabecera-lista__texto">
              La primera visita y una clase de prueba son gratis. Pásate cuando
              quieras o escríbenos por WhatsApp.
            </p>
            <Link to="/contacto" className="boton boton--primario">
              Ver ubicación y contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

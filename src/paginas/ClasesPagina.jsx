import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import Clases from '../componentes/secciones/Clases'
import { Link } from 'react-router-dom'

export default function ClasesPagina() {
  return (
    <>
      <CabeceraPagina
        miga="Clases"
        titulo="Clases y servicios"
        texto="Doce formas de moverte, una sola regla: ir a tu ritmo. Todas abiertas a todos los niveles."
      />
      <Clases cabecera={false} />

      <section className="seccion seccion--oscura">
        <div className="contenedor">
          <header className="planes-cabecera-lista">
            <span className="sobre-titulo sobre-titulo--oscuro">¿Y ahora qué?</span>
            <h2 className="h2--oscuro">¿Quieres ver precios claros?</h2>
          </header>
          <div className="enlace-pagina">
            <Link to="/planes" className="boton boton--amarillo">
              Ver planes y precios
            </Link>
            <Link to="/contacto" className="boton boton--fantasma-claro">
              Pedir cita en el gimnasio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

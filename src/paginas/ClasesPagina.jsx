import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import Clases from '../componentes/secciones/Clases'
import PressDepth from '../componentes/ui/PressDepth'

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
            <PressDepth to="/planes" className="boton boton--amarillo">
              Ver planes y precios
            </PressDepth>
            <PressDepth to="/contacto" className="boton boton--fantasma-claro">
              Pedir cita en el gimnasio
            </PressDepth>
          </div>
        </div>
      </section>
    </>
  )
}

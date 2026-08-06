import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import Ubicacion from '../componentes/secciones/Ubicacion'
import PressDepth from '../componentes/ui/PressDepth'

export default function ContactoPagina() {
  return (
    <>
      <CabeceraPagina
        miga="Ubicación"
        titulo="Encuéntranos en pleno centro"
        texto="Ven cuando quieras: te mostramos las instalaciones y, si te animas, haces tu primera clase gratis ese mismo día."
      />
      <Ubicacion cabecera={false} />

      <section className="seccion seccion--tinta">
        <div className="contenedor">
          <div className="enlace-pagina enlace-pagina--centrado">
            <span className="sobre-titulo">¿Te apetece empezar?</span>
            <h2 className="planes-cabecera-lista__titulo">
              Tu semana gratis te espera
            </h2>
            <p className="planes-cabecera-lista__texto">
              Sin permanencia y con tu primer día guiado por un coach. Solo
              tienes que elegir plan.
            </p>
            <PressDepth to="/planes" className="boton boton--primario">
              Ver planes y precios
            </PressDepth>
          </div>
        </div>
      </section>
    </>
  )
}

import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import Aparecer from '../componentes/ui/Aparecer'
import Icono from '../componentes/ui/Icono'
import PressDepth from '../componentes/ui/PressDepth'
import { convenios } from '../datos/contenido'

export default function ConveniosPagina() {
  return (
    <>
      <CabeceraPagina
        miga="Convenios"
        titulo="Entrena con beneficios para tu comunidad"
        texto="Empresas, estudiantes, entidades de salud y comunidades ya entrenan con nosotros gracias a convenios que hacen el deporte más accesible."
      />

      <section className="seccion seccion--tinta">
        <div className="contenedor">
          <div className="planes-cabecera-lista">
            <span className="sobre-titulo">Nuestros convenios</span>
            <h2 className="planes-cabecera-lista__titulo">
              ¿Con qué tipo de convenio cuentas?
            </h2>
            <p className="planes-cabecera-lista__texto">
              Elige tu caso y conoce el beneficio. Si no lo encuentras,
              escríbenos y lo vemos contigo.
            </p>
          </div>

          <ul className="convenios__cuadricula">
            {convenios.map((convenio, i) => (
              <Aparecer
                as="li"
                key={convenio.nombre}
                className="convenio"
                retraso={i * 90}
              >
                <div className="convenio__encabezado">
                  <span className="convenio__icono">
                    <Icono nombre={convenio.icono} tamano={26} />
                  </span>
                  <span className="convenio__beneficio">{convenio.beneficio}</span>
                </div>
                <h3>{convenio.nombre}</h3>
                <p>{convenio.detalle}</p>
                <ul className="convenio__puntos">
                  {convenio.puntos.map((punto) => (
                    <li key={punto}>
                      <Icono nombre="visto" tamano={16} />
                      {punto}
                    </li>
                  ))}
                </ul>
              </Aparecer>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="enlace-pagina enlace-pagina--centrado">
            <span className="sobre-titulo">¿Tu entidad quiere sumarse?</span>
            <h2 className="planes-cabecera-lista__titulo">
              Creemos un convenio para tu grupo
            </h2>
            <p className="planes-cabecera-lista__texto">
              Cuéntanos cuántas personas sois y te preparamos una propuesta con
              condiciones especiales.
            </p>
            <PressDepth to="/contacto" className="boton boton--primario">
              Hablemos de tu convenio
            </PressDepth>
          </div>
        </div>
      </section>
    </>
  )
}

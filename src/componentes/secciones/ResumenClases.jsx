import Aparecer from '../ui/Aparecer'
import PressDepth from '../ui/PressDepth'
import { clases } from '../../datos/contenido'

export default function ResumenClases() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <Aparecer as="header" className="resumen-cabecera">
          <div>
            <span className="sobre-titulo">Clases</span>
            <h2>Encuentra la tuya</h2>
            <p>
              Fuerza, funcional, ciclo, yoga… Hay más de doce formas de moverse
              cada semana, todas abiertas a cualquier nivel.
            </p>
          </div>
          <PressDepth to="/clases" className="boton boton--fantasma">
            Ver todas las clases
          </PressDepth>
        </Aparecer>

        <div className="resumen-clases">
          {clases.slice(0, 3).map((clase, i) => (
            <Aparecer
              as="article"
              key={clase.nombre}
              className="resumen-clase"
              retraso={i * 90}
            >
              <img src={clase.imagen} alt={`Clase de ${clase.nombre}`} loading="lazy" />
              <div className="resumen-clase__cuerpo">
                <div className="resumen-clase__chips">
                  {clase.etiquetas.map((etiqueta) => (
                    <span key={etiqueta} className="chip">
                      {etiqueta}
                    </span>
                  ))}
                </div>
                <h3>{clase.nombre}</h3>
                <p>{clase.descripcion}</p>
              </div>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  )
}

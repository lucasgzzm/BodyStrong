import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import PressDepth from '../ui/PressDepth'
import { razones } from '../../datos/contenido'

const avatares = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
]

export default function PorQue() {
  return (
    <section id="por-que" className="seccion">
      <div className="contenedor porque__cuadricula">
        <div className="porque__lado">
          <Aparecer as="header">
            <span className="sobre-titulo">Por qué BodyStrong</span>
            <h2>Un gimnasio hecho para personas, no para posturas</h2>
            <p>
              No vendemos cuerpos perfectos ni discursos de superación
              agresivos. Vendemos acompañamiento, constancia y un lugar donde
              sentirte capaz desde el día uno.
            </p>
          </Aparecer>

          <Aparecer className="porque__avatares" retraso={100}>
            {avatares.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
            <span>2.500+ personas entrenan aquí</span>
          </Aparecer>

          <Aparecer retraso={160}>
            <PressDepth to="/planes" className="boton boton--primario">
              Quiero empezar
            </PressDepth>
          </Aparecer>
        </div>

        <ol className="porque__lista">
          {razones.map((razon, i) => (
            <Aparecer
              as="li"
              key={razon.titulo}
              className="porque__item"
              retraso={i * 90}
            >
              <span className="porque__numero">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="porque__contenido">
                <h3>{razon.titulo}</h3>
                <p>{razon.texto}</p>
              </div>
              <Icono nombre={razon.icono} tamano={24} className="porque__icono" />
            </Aparecer>
          ))}
        </ol>
      </div>
    </section>
  )
}

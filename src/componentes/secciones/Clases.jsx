import { Link } from 'react-router-dom'
import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { clases } from '../../datos/contenido'

const [destacada, ...resto] = clases

export default function Clases({ cabecera = true }) {
  return (
    <section id="clases" className="seccion seccion--tinta">
      <div className="contenedor">
        {cabecera ? (
          <Aparecer as="header" className="clases__cabecera">
            <div className="clases__cabecera-texto">
              <span className="sobre-titulo">Clases y servicios</span>
              <h2>Doce formas de moverte, una sola regla: ir a tu ritmo</h2>
              <p>
                Todas las clases están abiertas a todos los niveles. Si una no te
                convence, prueba otra: encontrar la tuya es parte del plan.
              </p>
            </div>
            <Link to="/planes" className="boton boton--fantasma">
              Ver todos los horarios
            </Link>
          </Aparecer>
        ) : null}

        <div className="clases__cuadricula">
          <Aparecer as="article" className="clase-destacada">
            <img
              src={destacada.imagen}
              alt={`Clase de ${destacada.nombre} en BodyStrong`}
            />
            <div className="clase-destacada__velo" aria-hidden="true" />
            <div className="clase-destacada__contenido">
              <div className="clase-destacada__chips">
                {destacada.etiquetas.map((etiqueta) => (
                  <span key={etiqueta} className="chip">
                    {etiqueta}
                  </span>
                ))}
              </div>
              <h3>{destacada.nombre}</h3>
              <p>{destacada.descripcion}</p>
              <p className="clase-destacada__objetivo">
                <strong>Objetivo:</strong> {destacada.objetivo}
              </p>
              <div className="clase-destacada__chips">
                {destacada.horarios.map((horario) => (
                  <span key={horario} className="chip">
                    {horario}
                  </span>
                ))}
              </div>
              <p className="clase-destacada__instructor">
                <Icono nombre="usuarios" tamano={16} /> Con {destacada.instructor}
              </p>
              <Link to="/contacto" className="clase-destacada__enlace">
                Reservar mi sitio <Icono nombre="flechaDerecha" tamano={16} />
              </Link>
            </div>
          </Aparecer>

          <ol className="clases__lista">
            {resto.map((clase, i) => (
              <Aparecer
                as="li"
                key={clase.nombre}
                className="clase-fila"
                retraso={i * 80}
              >
                <span className="clase-fila__numero">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="clase-fila__info">
                  <h3>{clase.nombre}</h3>
                  <p>{clase.descripcion}</p>
                  <p className="clase-fila__meta">
                    <strong>Objetivo:</strong> {clase.objetivo}
                  </p>
                  <p className="clase-fila__meta">
                    {clase.duracion} · {clase.horarios[0]} · con {clase.instructor}
                  </p>
                </div>
                <div className="clase-fila__lado">
                  <Link to="/contacto" className="clase-fila__reservar">
                    Reservar
                  </Link>
                  <span className="clase-fila__hora">{clase.etiquetas[0]}</span>
                  <Icono
                    nombre="flechaDerecha"
                    tamano={18}
                    className="clase-fila__flecha"
                  />
                </div>
              </Aparecer>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

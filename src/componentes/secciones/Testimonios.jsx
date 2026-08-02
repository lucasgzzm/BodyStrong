import { useState } from 'react'
import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { testimonios } from '../../datos/contenido'

export default function Testimonios() {
  const [actual, setActual] = useState(0)
  const anterior = () => setActual((i) => (i - 1 + testimonios.length) % testimonios.length)
  const siguiente = () => setActual((i) => (i + 1) % testimonios.length)
  const testimonio = testimonios[actual]

  return (
    <section id="opiniones" className="seccion seccion--tinta">
      <div className="contenedor">
        <Aparecer as="header" className="testimonios__cabecera">
          <div className="testimonios__cabecera-texto">
            <span className="sobre-titulo">Opiniones</span>
            <h2>Historias de gente normal que empezó igual que tú</h2>
            <p>
              Esto no es marketing: son las personas que entrenan aquí cada
              semana.
            </p>
          </div>

          <div className="testimonios__controles">
            <button
              type="button"
              className="control-testimonio"
              aria-label="Opinión anterior"
              onClick={anterior}
            >
              <Icono nombre="flechaIzquierda" tamano={20} />
            </button>
            <button
              type="button"
              className="control-testimonio"
              aria-label="Siguiente opinión"
              onClick={siguiente}
            >
              <Icono nombre="flechaDerecha" tamano={20} />
            </button>
          </div>
        </Aparecer>

        <div className="testimonios__visor">
          <figure key={testimonio.nombre} className="testimonio-destacado">
            <span className="testimonio-destacado__comilla" aria-hidden="true">
              “
            </span>
            <span className="testimonio-destacado__estrellas" aria-label="Valoración: 5 de 5">
              <Icono nombre="estrella" tamano={18} />
              <Icono nombre="estrella" tamano={18} />
              <Icono nombre="estrella" tamano={18} />
              <Icono nombre="estrella" tamano={18} />
              <Icono nombre="estrella" tamano={18} />
            </span>
            <blockquote className="testimonio-destacado__cita">
              “{testimonio.cita}”
            </blockquote>
            <footer className="testimonio-destacado__pie">
              <img
                src={testimonio.avatar}
                alt={`Retrato de ${testimonio.nombre}`}
                loading="lazy"
              />
              <div>
                <strong>{testimonio.nombre}</strong>
                <span>{testimonio.meta}</span>
              </div>
            </footer>
          </figure>
        </div>

        <ol className="testimonios__puntos">
          {testimonios.map((t, i) => (
            <li key={t.nombre}>
              <button
                type="button"
                className={`punto ${i === actual ? 'punto--activo' : ''}`}
                aria-label={`Ver opinión de ${t.nombre}`}
                onClick={() => setActual(i)}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

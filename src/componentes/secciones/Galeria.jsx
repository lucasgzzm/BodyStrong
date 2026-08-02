import { Link } from 'react-router-dom'
import Aparecer from '../ui/Aparecer'
import { galeria } from '../../datos/contenido'

export default function Galeria() {
  return (
    <section id="galeria" className="seccion">
      <div className="contenedor">
        <Aparecer as="header" className="galeria__cabecera">
          <div className="galeria__cabecera-texto">
            <span className="sobre-titulo">Galería</span>
            <h2>Así se ve un gimnasio que se siente como casa</h2>
            <p>
              Luces cálidas, gente real y un espacio cuidado hasta el último
              detalle. Pásate y compruébalo en persona.
            </p>
          </div>
          <Link to="/contacto" className="boton boton--primario">
            Reserva tu visita
          </Link>
        </Aparecer>

        <div className="galeria__masonica">
          {galeria.map((elemento, i) => (
            <Aparecer
              key={elemento.src}
              className={`elemento-galeria elemento-galeria--${(i % 3) + 1}`}
              as="figure"
              retraso={(i % 3) * 80}
            >
              <img src={elemento.src} alt={elemento.leyenda} loading="lazy" />
              <figcaption>{elemento.leyenda}</figcaption>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  )
}

import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { publicacionesInsta } from '../../datos/contenido'

export default function Instagram() {
  return (
    <section id="instagram" className="seccion seccion--oscura instagram">
      <div className="contenedor">
        <Aparecer as="header" className="instagram__cabecera">
          <div className="instagram__cabecera-texto">
            <span className="sobre-titulo sobre-titulo--oscuro">Instagram</span>
            <h2 className="h2--oscuro">Síguenos: @bodystronggym</h2>
            <p className="p--oscuro">
              Rutinas, retos semanales y el día a día de la comunidad.
              Etiquétanos y podrías salir en el feed.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="boton boton--primario"
          >
            <Icono nombre="instagram" tamano={20} />
            Seguirnos
          </a>
        </Aparecer>
      </div>

      <Aparecer className="instagram__tira" retraso={100}>
        {publicacionesInsta.map((src) => (
          <a
            key={src}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="elemento-instagram"
            aria-label="Ver publicación en Instagram"
          >
            <img src={src} alt="" loading="lazy" />
            <span className="elemento-instagram__superposicion">
              <Icono nombre="instagram" tamano={24} />
            </span>
          </a>
        ))}
      </Aparecer>
    </section>
  )
}

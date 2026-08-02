import { Link } from 'react-router-dom'
import Icono from '../ui/Icono'
import Logotipo from '../ui/Logotipo'
import { enlacesNavegacion, horario } from '../../datos/contenido'

const redes = [
  { nombre: 'Instagram', destino: 'https://instagram.com', icono: 'instagram' },
  { nombre: 'TikTok', destino: 'https://tiktok.com', icono: 'tiktok' },
  { nombre: 'YouTube', destino: 'https://youtube.com', icono: 'youtube' },
  { nombre: 'Facebook', destino: 'https://facebook.com', icono: 'facebook' },
]

export default function PieDePagina() {
  return (
    <footer className="pie-pagina">
      <div className="pie-pagina__llamada">
        <div className="contenedor pie-pagina__llamada-interior">
          <div>
            <span className="sobre-titulo sobre-titulo--oscuro">
              Tu semana gratis te espera
            </span>
            <h2 className="h2--oscuro">Listo para dar el primer paso</h2>
          </div>
          <p>
            Sin permanencia, sin letra pequeña y con tu primer día guiado por un
            coach.
          </p>
          <Link to="/planes" className="boton boton--amarillo">
            Empieza mi semana gratis
          </Link>
        </div>
      </div>

      <div className="contenedor pie-pagina__cuadricula">
        <div className="pie-pagina__marca">
          <Logotipo />
          <p>
            Mueve tu cuerpo, conecta con tu gente. Un gimnasio cercano para
            todos los niveles.
          </p>
          <ul className="pie-pagina__redes">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.destino}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={red.nombre}
                >
                  <Icono nombre={red.icono} tamano={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="pie-pagina__columna" aria-label="Secciones">
          <h3>Explora</h3>
          <ul>
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.destino}>
                <Link to={enlace.destino}>{enlace.etiqueta}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pie-pagina__columna">
          <h3>Ayuda</h3>
          <ul>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/contacto">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link to="/planes">Condiciones de los planes</Link>
            </li>
            <li>
              <Link to="/planes">Política de privacidad</Link>
            </li>
          </ul>
        </div>

        <div className="pie-pagina__columna pie-pagina__columna--boletin">
          <h3>Horario</h3>
          <ul className="horario-pie">
            {horario.map((franja) => (
              <li key={franja.dias}>
                <span>{franja.dias}</span>
                <b>{franja.horas}</b>
              </li>
            ))}
          </ul>

          <h3 className="pie-pagina__titulo-boletin">Recibe rutinas y consejos</h3>
          <form className="pie-pagina__boletin" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="tu@email.com"
              aria-label="Tu correo electrónico"
            />
            <button type="submit" className="boton boton--primario boton--pequeno">
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className="pie-pagina__inferior">
        <div className="contenedor pie-pagina__inferior-interior">
          <p>© {new Date().getFullYear()} BodyStrong. Hecho con energía y buena vibra.</p>
          <p className="pie-pagina__creditos">Fotografías cortesía de Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}

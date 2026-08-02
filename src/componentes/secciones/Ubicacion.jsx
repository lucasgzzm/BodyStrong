import { Link } from 'react-router-dom'
import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { horario } from '../../datos/contenido'

export default function Ubicacion({ cabecera = true }) {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="ubicacion__mapa">
        <iframe
          title="Mapa de BodyStrong en Madrid"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7070%2C40.4160%2C-3.6940%2C40.4250&layer=mapnik&marker=40.4205%2C-3.7005"
          loading="lazy"
        />
      </div>

      <div className="contenedor">
        <Aparecer className="info-ubicacion">
          {cabecera ? (
            <header className="info-ubicacion__cabecera">
              <span className="sobre-titulo">Ubicación y contacto</span>
              <h2>Encuéntranos en pleno centro</h2>
              <p>
                Ven cuando quieras: te mostramos las instalaciones y, si te
                animas, haces tu primera clase gratis ese mismo día.
              </p>
            </header>
          ) : null}

          <div className="bloque-ubicacion">
            <span className="bloque-ubicacion__icono">
              <Icono nombre="ubicacion" tamano={22} />
            </span>
            <div>
              <h3>Dirección</h3>
              <p>
                Calle del Entreno, 12
                <br />
                Centro
              </p>
              <p className="ubicacion-atenuada">
                A 3 minutos del metro y de varias paradas de autobús
              </p>
            </div>
          </div>

          <div className="bloque-ubicacion">
            <span className="bloque-ubicacion__icono">
              <Icono nombre="reloj" tamano={22} />
            </span>
            <div>
              <h3>Horario</h3>
              <ul className="horario-ubicacion">
                {horario.map((franja) => (
                  <li key={franja.dias}>
                    <span>{franja.dias}</span>
                    <b>{franja.horas}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bloque-ubicacion">
            <span className="bloque-ubicacion__icono">
              <Icono nombre="telefono" tamano={22} />
            </span>
            <div>
              <h3>Contacto</h3>
              <p>
                <a href="tel:+34910123456">+34 910 123 456</a>
                <br />
                <a href="mailto:hola@bodystrong.es">hola@bodystrong.es</a>
              </p>
              <p className="ubicacion-atenuada">Respondemos en menos de 24 h</p>
            </div>
          </div>

          <Link to="/planes" className="boton boton--primario">
            Ven a conocernos
          </Link>
        </Aparecer>
      </div>
    </section>
  )
}

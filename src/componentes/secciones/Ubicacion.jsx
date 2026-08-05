import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { horario, redes, contacto } from '../../datos/contenido'

const coordenadas = {
  lat: 40.4205,
  lon: -3.7005,
}

const urlMapa =
  'https://www.openstreetmap.org/export/embed.html?bbox=-3.7060%2C40.4170%2C-3.6950%2C40.4240&layer=mapnik&marker=40.4205%2C-3.7005'

const urlComoLlegar = `https://www.openstreetmap.org/directions?from=&to=${coordenadas.lat}%2C${coordenadas.lon}`

export default function Ubicacion({ cabecera = true }) {
  const [mapaActivo, setMapaActivo] = useState(false)
  const mapaRef = useRef(null)

  useEffect(() => {
    if (!mapaActivo) return

    const alClicFuera = (evento) => {
      if (mapaRef.current && !mapaRef.current.contains(evento.target)) {
        setMapaActivo(false)
      }
    }
    const alEscapar = (evento) => {
      if (evento.key === 'Escape') setMapaActivo(false)
    }

    document.addEventListener('mousedown', alClicFuera)
    document.addEventListener('touchstart', alClicFuera, { passive: true })
    document.addEventListener('keydown', alEscapar)
    return () => {
      document.removeEventListener('mousedown', alClicFuera)
      document.removeEventListener('touchstart', alClicFuera)
      document.removeEventListener('keydown', alEscapar)
    }
  }, [mapaActivo])

  return (
    <section id="ubicacion" className="ubicacion">
      <div className="contenedor">
        {cabecera ? (
          <Aparecer as="header" className="ubicacion__cabecera">
            <span className="sobre-titulo">Ubicación y contacto</span>
            <h2>Encuéntranos en pleno centro</h2>
            <p>
              Ven cuando quieras: te mostramos las instalaciones y, si te
              animas, haces tu primera clase gratis ese mismo día.
            </p>
          </Aparecer>
        ) : null}

        <div className="ubicacion__contenido">
          <div
            ref={mapaRef}
            className={`ubicacion__mapa${mapaActivo ? ' ubicacion__mapa--activo' : ''}`}
          >
            <iframe
              title="Mapa de BodyStrong en Madrid"
              src={urlMapa}
              loading="lazy"
            />
            {!mapaActivo && (
              <button
                type="button"
                className="ubicacion__mapa-activar"
                onClick={() => setMapaActivo(true)}
              >
                <span className="ubicacion__mapa-etiqueta">
                  <Icono nombre="ubicacion" tamano={16} />
                  Activar mapa
                </span>
              </button>
            )}
          </div>

          <Aparecer className="info-ubicacion">
            <div className="bloque-ubicacion">
              <span className="bloque-ubicacion__icono">
                <Icono nombre="ubicacion" tamano={22} />
              </span>
              <div>
                <h3>Dirección</h3>
                <p>
                  {contacto.direccion.calle}
                  <br />
                  {contacto.direccion.zona}
                </p>
                <p className="ubicacion-atenuada">{contacto.direccion.nota}</p>
              </div>
            </div>

            <div className="bloque-ubicacion">
              <span className="bloque-ubicacion__icono">
                <Icono nombre="telefono" tamano={22} />
              </span>
              <div>
                <h3>Contacto</h3>
                <p>
                  <a href={contacto.telefonoHref}>{contacto.telefono}</a>
                  <br />
                  <a href={contacto.correoHref}>{contacto.correo}</a>
                </p>
                <p className="ubicacion-atenuada">
                  Respondemos en menos de 24 h
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
                <Icono nombre="corazon" tamano={22} />
              </span>
              <div>
                <h3>Síguenos</h3>
                <ul className="bloque-ubicacion__redes">
                  {redes.map((red) => (
                    <li key={red.nombre}>
                      <a
                        href={red.destino}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={red.nombre}
                      >
                        <Icono nombre={red.icono} tamano={18} />
                        {red.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="formulario-contacto">
              <h3>Escríbenos</h3>
              <p className="ubicacion-atenuada">
                Déjanos tu mensaje y te respondemos en menos de 24 h.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  aria-label="Tu nombre"
                  required
                />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  aria-label="Tu correo electrónico"
                  required
                />
                <textarea
                  placeholder="Cuéntanos qué necesitas…"
                  aria-label="Tu mensaje"
                  rows={3}
                  required
                />
                <button type="submit" className="boton boton--primario">
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="info-ubicacion__acciones">
              <Link to="/planes" className="boton boton--primario">
                Ven a conocernos
              </Link>
              <a
                href={urlComoLlegar}
                target="_blank"
                rel="noreferrer"
                className="boton boton--fantasma"
              >
                Cómo llegar
              </a>
            </div>
          </Aparecer>
        </div>
      </div>
    </section>
  )
}

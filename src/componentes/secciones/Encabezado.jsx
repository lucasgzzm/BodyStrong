import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logotipo from '../ui/Logotipo'
import { enlacesNavegacion } from '../../datos/contenido'

export default function Encabezado() {
  const [desplazado, setDesplazado] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const accionesRef = useRef(null)

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 10)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  useEffect(() => {
    if (!abierto) return

    const alClicFuera = (evento) => {
      if (accionesRef.current && !accionesRef.current.contains(evento.target)) {
        setAbierto(false)
      }
    }
    const alEscapar = (evento) => {
      if (evento.key === 'Escape') setAbierto(false)
    }

    document.addEventListener('mousedown', alClicFuera)
    document.addEventListener('touchstart', alClicFuera, { passive: true })
    document.addEventListener('keydown', alEscapar)
    return () => {
      document.removeEventListener('mousedown', alClicFuera)
      document.removeEventListener('touchstart', alClicFuera)
      document.removeEventListener('keydown', alEscapar)
    }
  }, [abierto])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  return (
    <>
      <header className={`encabezado ${desplazado ? 'encabezado--desplazado' : ''}`}>
        <div className="encabezado__interior">
          <Logotipo />

          <nav className="navegacion" aria-label="Principal">
            <ul>
              {enlacesNavegacion.map((enlace) => (
                <li key={enlace.destino}>
                  <NavLink
                    to={enlace.destino}
                    className={({ isActive }) =>
                      `navegacion__enlace${isActive ? ' navegacion__enlace--activo' : ''}`
                    }
                  >
                    {enlace.etiqueta}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="encabezado__acciones" ref={accionesRef}>
            <Link to="/planes" className="boton boton--primario boton--pequeno">
              Empieza hoy
            </Link>
            <button
              type="button"
              className={`alternador-menu ${abierto ? 'alternador-menu--abierto' : ''}`}
              aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={abierto}
              onClick={() => setAbierto((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>

            <div className={`panel-movil ${abierto ? 'panel-movil--abierto' : ''}`}>
              <nav aria-label="Móvil">
                <ul>
                  {enlacesNavegacion.map((enlace) => (
                    <li key={enlace.destino}>
                      <NavLink
                        to={enlace.destino}
                        onClick={() => setAbierto(false)}
                        className={({ isActive }) =>
                          `panel-movil__enlace${isActive ? ' panel-movil__enlace--activo' : ''}`
                        }
                      >
                        {enlace.etiqueta}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                to="/planes"
                className="boton boton--primario"
                onClick={() => setAbierto(false)}
              >
                Empieza hoy · semana gratis
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

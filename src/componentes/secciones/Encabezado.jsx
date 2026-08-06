import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logotipo from '../ui/Logotipo'
import PressDepth from '../ui/PressDepth'
import { enlacesNavegacion } from '../../datos/contenido'

const ESTILO_ICONO = {
  width: '1em',
  height: '1em',
  flexShrink: 0,
}

function IconoInicio() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M12 3l9 8h-2.6v9h-4.9v-5.4h-3V20H5.6v-9H3z" />
    </svg>
  )
}

function IconoClases() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={ESTILO_ICONO} aria-hidden="true">
      <rect x="3.5" y="5.5" width="3.5" height="13" rx="1.75" />
      <rect x="6.8" y="7.5" width="2.4" height="9" rx="1.2" />
      <rect x="8.6" y="9.5" width="6.8" height="5" rx="2.5" />
      <rect x="14.8" y="7.5" width="2.4" height="9" rx="1.2" />
      <rect x="17" y="5.5" width="3.5" height="13" rx="1.75" />
    </svg>
  )
}

function IconoPlanes() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M6 3h12l5 7-11 12L1 10z" />
    </svg>
  )
}

function IconoContacto() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M12 2a7.6 7.6 0 0 0-7.6 7.6c0 5.1 7.6 12.4 7.6 12.4s7.6-7.3 7.6-12.4A7.6 7.6 0 0 0 12 2zm0 10.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
    </svg>
  )
}

function IconoConvenios() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm0 4.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5zm0 4A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5z" />
    </svg>
  )
}

function IconoCuenta() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 13c-4.6 0-8 2.9-8 6.5V21h16v-1.5c0-3.6-3.4-6.5-8-6.5z" />
    </svg>
  )
}

const ICONOS_NAVEGACION = {
  '/': <IconoInicio />,
  '/clases': <IconoClases />,
  '/planes': <IconoPlanes />,
  '/convenios': <IconoConvenios />,
  '/contacto': <IconoContacto />,
  '/cuenta': <IconoCuenta />,
}

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
    document.body.classList.toggle('menu-abierto', abierto)
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.classList.remove('menu-abierto')
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
                    <span className="navegacion__enlace-icono">
                      {ICONOS_NAVEGACION[enlace.destino]}
                    </span>
                    {enlace.etiqueta}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="encabezado__acciones" ref={accionesRef}>
            <PressDepth
              to="/planes"
              className="boton boton--primario boton--pequeno"
            >
              Empieza hoy
            </PressDepth>
            <button
              type="button"
              className={`alternador-menu ${abierto ? 'alternador-menu--abierto' : ''}`}
              aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={abierto}
              onClick={() => setAbierto((v) => !v)}
            >
              <svg
                className="alternador-menu__icono"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {abierto ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
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
                        <span className="panel-movil__enlace-icono">
                          {ICONOS_NAVEGACION[enlace.destino]}
                        </span>
                        {enlace.etiqueta}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <PressDepth
                to="/planes"
                className="panel-movil__cta"
                onClick={() => setAbierto(false)}
              >
                Empieza hoy
              </PressDepth>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

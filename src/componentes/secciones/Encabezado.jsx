import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logotipo from '../ui/Logotipo'
import { enlacesNavegacion } from '../../datos/contenido'

const ESTILO_ICONO = {
  width: '1em',
  height: '1em',
  flexShrink: 0,
}

function IconoInicio() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconoClases() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}

function IconoPlanes() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.735H5.81a1 1 0 0 1-.957-.735L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}

function IconoContacto() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconoConvenios() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconoCuenta() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-3.314 3.582-6 8-6s8 2.686 8 6" />
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

              <Link
                to="/planes"
                className="panel-movil__cta"
                onClick={() => setAbierto(false)}
              >
                Empieza hoy
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

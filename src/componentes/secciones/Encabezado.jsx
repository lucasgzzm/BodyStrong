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

function IconoCorona() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.735H5.81a1 1 0 0 1-.957-.735L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}

function IconoCerrarSesion() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}

const ICONOS_NAVEGACION = {
  '/': <IconoInicio />,
  '/clases': <IconoClases />,
  '/planes': <IconoPlanes />,
  '/contacto': <IconoContacto />,
}

const AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'

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
              <div className="panel-movil__perfil">
                <img className="panel-movil__avatar" src={AVATAR} alt="Usuario" />
                <div className="panel-movil__usuario">
                  <span className="panel-movil__correo">cliente@bodystrong.com</span>
                  <span className="panel-movil__plan">
                    <IconoCorona />
                    Plan PRO
                  </span>
                </div>
              </div>

              <span className="panel-movil__separador" />

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

              <span className="panel-movil__separador" />

              <button
                type="button"
                className="panel-movil__cerrar"
                onClick={() => setAbierto(false)}
              >
                <IconoCerrarSesion />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

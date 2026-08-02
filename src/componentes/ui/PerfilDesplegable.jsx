import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ESTILO_ICONO = {
  width: '1em',
  height: '1em',
  flexShrink: 0,
}

function IconoUsuario() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconoModelo() {
  return (
    <svg viewBox="0 0 24 24" style={ESTILO_ICONO} aria-hidden="true">
      <defs>
        <linearGradient id="icono-gemini" x1="0%" x2="68.73%" y1="100%" y2="30.395%">
          <stop offset="0%" stopColor="#1C7DFF" />
          <stop offset="52.021%" stopColor="#1C69FF" />
          <stop offset="100%" stopColor="#F0DCD6" />
        </linearGradient>
      </defs>
      <path
        d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"
        fill="url(#icono-gemini)"
        fillRule="nonzero"
      />
    </svg>
  )
}

function IconoTarjeta() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function IconoConfiguracion() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconoDocumento() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={ESTILO_ICONO} aria-hidden="true">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
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

const DATOS_EJEMPLO = {
  nombre: 'Cliente BodyStrong',
  correo: 'cliente@bodystrong.com',
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
  suscripcion: 'PRO',
  modelo: 'Gemini 2.0 Flash',
}

export default function PerfilDesplegable({ datos = DATOS_EJEMPLO }) {
  const [abierto, setAbierto] = useState(false)
  const contenedorRef = useRef(null)

  useEffect(() => {
    if (!abierto) return

    const alClicFuera = (evento) => {
      if (contenedorRef.current && !contenedorRef.current.contains(evento.target)) {
        setAbierto(false)
      }
    }
    const alEscapar = (evento) => {
      if (evento.key === 'Escape') setAbierto(false)
    }

    document.addEventListener('mousedown', alClicFuera)
    document.addEventListener('keydown', alEscapar)
    return () => {
      document.removeEventListener('mousedown', alClicFuera)
      document.removeEventListener('keydown', alEscapar)
    }
  }, [abierto])

  const elementos = [
    { etiqueta: 'Perfil', href: '/planes', icono: <IconoUsuario /> },
    { etiqueta: 'Modelo', valor: datos.modelo, href: '/contacto', icono: <IconoModelo /> },
    { etiqueta: 'Suscripción', valor: datos.suscripcion, href: '/planes', icono: <IconoTarjeta /> },
    { etiqueta: 'Configuración', href: '/contacto', icono: <IconoConfiguracion /> },
    { etiqueta: 'Términos y políticas', href: '/contacto', icono: <IconoDocumento /> },
  ]

  return (
    <div className="perfil-desplegable" ref={contenedorRef}>
      <button
        type="button"
        className={`perfil-desplegable__boton ${abierto ? 'perfil-desplegable__boton--abierto' : ''}`}
        aria-expanded={abierto}
        aria-haspopup="menu"
        onClick={() => setAbierto((v) => !v)}
      >
        <span className="perfil-desplegable__texto">
          <span className="perfil-desplegable__nombre">{datos.nombre}</span>
          <span className="perfil-desplegable__correo">{datos.correo}</span>
        </span>
        <span className="perfil-desplegable__avatar">
          <img src={datos.avatar} alt={datos.nombre} />
        </span>
        <svg
          className={`perfil-desplegable__indicador ${abierto ? 'perfil-desplegable__indicador--abierto' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={ESTILO_ICONO}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`perfil-desplegable__panel ${abierto ? 'perfil-desplegable__panel--abierto' : ''}`}
        role="menu"
      >
        <ul className="perfil-desplegable__lista">
          {elementos.map((elemento) => (
            <li key={elemento.etiqueta}>
              <Link
                to={elemento.href}
                role="menuitem"
                className="perfil-desplegable__enlace"
                onClick={() => setAbierto(false)}
              >
                <span className="perfil-desplegable__enlace-izq">
                  {elemento.icono}
                  <span>{elemento.etiqueta}</span>
                </span>
                {elemento.valor && (
                  <span
                    className={`perfil-desplegable__insignia ${
                      elemento.etiqueta === 'Modelo'
                        ? 'perfil-desplegable__insignia--azul'
                        : 'perfil-desplegable__insignia--morada'
                    }`}
                  >
                    {elemento.valor}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <span className="perfil-desplegable__separador" />

        <button
          type="button"
          role="menuitem"
          className="perfil-desplegable__cerrar"
          onClick={() => setAbierto(false)}
        >
          <IconoCerrarSesion />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  )
}

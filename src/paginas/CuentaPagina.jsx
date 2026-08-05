import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import CabeceraPagina from '../componentes/ui/CabeceraPagina'
import {
  registrarUsuario,
  iniciarSesion,
  cerrarSesion,
  sesionActual,
  activarMembresia,
  renovarMembresia,
  calcularMembresia,
  consumirPlanPendiente,
  planPendiente,
  estadoEntradaHoy,
  marcarEntradaHoy,
  tokenQr,
} from '../datos/almacen'

function formatearPrecio(valor) {
  return Math.round(valor)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function formatearFecha(fecha) {
  return fecha.toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function FormularioAutenticacion() {
  const [modo, setModo] = useState('entrar')
  const [formulario, setFormulario] = useState({ nombre: '', email: '', clave: '' })
  const [error, setError] = useState('')
  const [sesion, setSesion] = useState(() => sesionActual())

  if (sesion) {
    return (
      <SesionIniciada
        nombre={sesion.nombre}
        onSalir={() => {
          cerrarSesion()
          setSesion(null)
        }}
      />
    )
  }

  const alEnviar = (evento) => {
    evento.preventDefault()
    setError('')
    if (modo === 'registro') {
      if (formulario.nombre.trim().length < 2) {
        setError('Escribe tu nombre.')
        return
      }
      if (formulario.clave.length < 4) {
        setError('La contraseña debe tener al menos 4 caracteres.')
        return
      }
      const resultado = registrarUsuario(formulario)
      if (!resultado.ok) {
        setError(resultado.error)
        return
      }
      setSesion(resultado.usuario)
    } else {
      const resultado = iniciarSesion(formulario.email, formulario.clave)
      if (!resultado.ok) {
        setError(resultado.error)
        return
      }
      setSesion(resultado.usuario)
    }
  }

  return (
    <section className="seccion seccion--cuenta-fondo">
      <div className="contenedor">
        <div className="cuenta-ventana">
          <div className="cuenta-tabs">
            <button
              type="button"
              className={`cuenta-tabs__boton ${modo === 'entrar' ? 'cuenta-tabs__boton--activo' : ''}`}
              onClick={() => {
                setModo('entrar')
                setError('')
              }}
            >
              Entrar
            </button>
            <button
              type="button"
              className={`cuenta-tabs__boton ${modo === 'registro' ? 'cuenta-tabs__boton--activo' : ''}`}
              onClick={() => {
                setModo('registro')
                setError('')
              }}
            >
              Crear cuenta
            </button>
          </div>

          <form className="cuenta-formulario" onSubmit={alEnviar}>
            {modo === 'registro' ? (
              <label className="cuenta-campo">
                <span>Tu nombre</span>
                <input
                  type="text"
                  placeholder="Ej: Camila"
                  value={formulario.nombre}
                  onChange={(e) =>
                    setFormulario({ ...formulario, nombre: e.target.value })
                  }
                />
              </label>
            ) : null}

            <label className="cuenta-campo">
              <span>Correo electrónico</span>
              <input
                type="email"
                placeholder="tu@email.com"
                value={formulario.email}
                onChange={(e) =>
                  setFormulario({ ...formulario, email: e.target.value })
                }
              />
            </label>

            <label className="cuenta-campo">
              <span>Contraseña</span>
              <input
                type="password"
                placeholder="••••••••"
                value={formulario.clave}
                onChange={(e) =>
                  setFormulario({ ...formulario, clave: e.target.value })
                }
              />
            </label>

            {error ? <p className="cuenta-error">{error}</p> : null}

            <button type="submit" className="boton boton--primario">
              {modo === 'entrar' ? 'Entrar' : 'Crear mi cuenta'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function SesionIniciada({ nombre, onSalir }) {
  const [, setVersion] = useState(0)
  const membresia = calcularMembresia()
  const entrada = estadoEntradaHoy()
  const pendiente = planPendiente()
  const accesoActivo = membresia && !membresia.vencida
  const progreso = membresia
    ? Math.round((membresia.restante / membresia.total) * 100)
    : 0

  const claseBarra = !membresia
    ? ''
    : progreso > 50
      ? 'barra-membresia--verde'
      : progreso > 20
        ? 'barra-membresia--amarilla'
        : 'barra-membresia--roja'

  const alActivarPlan = () => {
    const plan = consumirPlanPendiente()
    if (plan) activarMembresia(plan)
    setVersion((v) => v + 1)
  }

  const alRenovar = () => {
    renovarMembresia()
    setVersion((v) => v + 1)
  }

  const alMarcarEntrada = () => {
    marcarEntradaHoy()
    setVersion((v) => v + 1)
  }

  return (
    <section className="seccion seccion--cuenta-fondo">
      <div className="contenedor">
        <div className="cuenta-bienvenida">
          <h2>Hola, {nombre} 👋</h2>
        </div>

        <div className="cuenta-cuadricula">
          <div className="cuenta-tarjeta">
            <h3 className="cuenta-tarjeta__titulo">Mi mensualidad</h3>

            {!membresia ? (
              <div className="cuenta-vacia">
                <p>Aún no tienes una mensualidad activa.</p>
                {pendiente ? (
                  <div className="cuenta-plan-pendiente">
                    <strong>{pendiente.nombre}</strong>
                    <span>
                      ${formatearPrecio(pendiente.precioMensual)}/mes
                    </span>
                    <button
                      type="button"
                      className="boton boton--primario"
                      onClick={alActivarPlan}
                    >
                      Activar mi plan (30 días)
                    </button>
                    <Link to="/planes" className="cuenta-enlace">
                      Elegir otro plan
                    </Link>
                  </div>
                ) : (
                  <Link to="/planes" className="boton boton--primario">
                    Ver planes
                  </Link>
                )}
              </div>
            ) : (
              <>
                <div className="cuenta-membresia__cabecera">
                  <div>
                    <span className="sobre-titulo">Plan activo</span>
                    <strong className="cuenta-membresia__plan">
                      {membresia.plan}
                    </strong>
                  </div>
                  <span className="cuenta-membresia__precio">
                    ${formatearPrecio(membresia.precioMensual)}/mes
                  </span>
                </div>

                {membresia.vencida ? (
                  <p className="cuenta-aviso">
                    Tu mensualidad venció el {formatearFecha(membresia.fin)}.
                    Renuévala para seguir entrenando y acceder con el QR.
                  </p>
                ) : (
                  <div className="cuenta-membresia__progreso">
                    <div className="cuenta-membresia__fila">
                      <span>
                        <strong>{membresia.restante}</strong> de {membresia.total}{' '}
                        días restantes
                      </span>
                      <strong>{progreso}%</strong>
                    </div>
                    <div
                      className={`barra-membresia ${claseBarra}`}
                      style={{ '--progreso': `${progreso}%` }}
                      role="progressbar"
                      aria-valuenow={progreso}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="barra-membresia__relleno" />
                      <span className="barra-membresia__mascota">🏋️</span>
                    </div>
                    <p className="cuenta-membresia__rango">
                      {formatearFecha(membresia.inicio)} →{' '}
                      {formatearFecha(membresia.fin)}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  className="boton boton--fantasma"
                  onClick={alRenovar}
                >
                  {membresia.vencida ? 'Renovar mi mensualidad' : 'Reiniciar 30 días'}
                </button>
              </>
            )}
          </div>

          <div className="cuenta-tarjeta">
            <h3 className="cuenta-tarjeta__titulo">Acceso del día</h3>

            {!accesoActivo ? (
              <p className="cuenta-aviso">
                Necesitas una mensualidad activa para generar tu QR de entrada.
              </p>
            ) : entrada.usado ? (
              <div className="cuenta-qr-ok">
                <span className="cuenta-qr-ok__visto">✓</span>
                <strong>¡Ya has entrado hoy!</strong>
                <p>Tu código vuelve a estar disponible mañana a partir de las 00:00.</p>
              </div>
            ) : (
              <div className="cuenta-qr">
                <p className="cuenta-qr__aviso">
                  Muestra este código en el lector del gym. Solo sirve una vez al
                  día.
                </p>
                <div className="cuenta-qr__codigo">
                  <QRCodeSVG value={tokenQr()} size={220} />
                </div>
                <button
                  type="button"
                  className="boton boton--primario"
                  onClick={alMarcarEntrada}
                >
                  Marcar entrada (ya he entrado)
                </button>
                <p className="cuenta-qr__nota">
                  En la vida real lo marca el lector del gimnasio. Aquí lo haces
                  tú para probar: una vez marcado, el QR desaparece hasta mañana.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="cuenta-salir">
          <button type="button" className="boton boton--fantasma-claro" onClick={onSalir}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </section>
  )
}

export default function CuentaPagina() {
  return (
    <>
      <CabeceraPagina
        miga="Mi cuenta"
        titulo="Mi cuenta"
        texto="Gestiona tu mensualidad y genera tu QR de acceso diario al gimnasio."
      />
      <FormularioAutenticacion />
    </>
  )
}

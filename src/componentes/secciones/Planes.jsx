import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { planes } from '../../datos/contenido'
import { seleccionarPlanPendiente } from '../../datos/almacen'

function formatearPrecio(valor) {
  return Math.round(valor)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const garantias = ['Sin permanencia', 'Cancela cuando quieras', 'Primera clase gratis']

export default function Planes({ cabecera = true }) {
  const [anual, setAnual] = useState(false)

  const conmutador = (
    <div className="conmutador-planes">
      <span className={anual ? '' : 'conmutador-planes__activo'}>Mensual</span>
      <button
        type="button"
        role="switch"
        aria-checked={anual}
        aria-label="Alternar facturación anual"
        className={`interruptor ${anual ? 'interruptor--activo' : ''}`}
        onClick={() => setAnual((v) => !v)}
      >
        <span />
      </button>
      <span className={anual ? 'conmutador-planes__activo' : ''}>
        Anual <b>2 meses gratis</b>
      </span>
    </div>
  )

  return (
    <section id="planes" className="seccion seccion--oscura">
      <div className="contenedor">
        {cabecera ? (
          <Aparecer as="header" className="planes__cabecera">
            <div className="planes__cabecera-texto">
              <span className="sobre-titulo sobre-titulo--oscuro">
                Planes de membresía
              </span>
              <h2 className="h2--oscuro">Precios claros, sin letra pequeña</h2>
              <p className="p--oscuro">
                Elige el plan que encaja con tu momento. Todos incluyen sin
                permanencia: si no es tu sitio, te vas cuando quieras.
              </p>
            </div>
            {conmutador}
          </Aparecer>
        ) : (
          <Aparecer className="planes__conmutador">{conmutador}</Aparecer>
        )}

        <div className="cuadricula-planes">
          {planes.map((plan, i) => {
            const precio = anual ? (plan.precioMensual * 10) / 12 : plan.precioMensual
            return (
              <Aparecer
                key={plan.nombre}
                className={`tarjeta-plan ${plan.destacado ? 'tarjeta-plan--destacada' : ''}`}
                as="article"
                retraso={i * 100}
              >
                {plan.destacado ? (
                  <span className="tarjeta-plan__insignia">Más popular</span>
                ) : null}
                <h3>{plan.nombre}</h3>
                <p className="tarjeta-plan__eslogan">{plan.eslogan}</p>
                {plan.promocion ? (
                  <p className="tarjeta-plan__promocion">{plan.promocion}</p>
                ) : null}

                <p className="tarjeta-plan__precio">
                  <span className="tarjeta-plan__moneda">$</span>
                  {formatearPrecio(precio)}
                  <span className="tarjeta-plan__periodo">/mes</span>
                </p>
                {anual ? (
                  <p className="tarjeta-plan__nota">Paga 10 meses, entrena 12</p>
                ) : (
                  <p className="tarjeta-plan__nota">Facturación mensual</p>
                )}

                <ul className="tarjeta-plan__beneficios">
                  {plan.beneficios.map((beneficio) => (
                    <li key={beneficio}>
                      <Icono nombre="visto" tamano={18} />
                      {beneficio}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/cuenta"
                  className={`boton ${
                    plan.destacado ? 'boton--primario' : 'boton--fantasma-claro'
                  }`}
                  onClick={() => seleccionarPlanPendiente(plan)}
                >
                  {plan.llamado}
                </Link>
              </Aparecer>
            )
          })}
        </div>

        <Aparecer className="planes__garantias" as="ul">
          {garantias.map((garantia) => (
            <li key={garantia}>
              <Icono nombre="visto" tamano={20} />
              {garantia}
            </li>
          ))}
        </Aparecer>

        <Aparecer className="planes__comparativa" retraso={120}>
          <h3 className="planes__comparativa-titulo">¿Cómo se comparan?</h3>
          <ul className="planes__comparativa-lista">
            <li>
              <strong>Flex</strong> — para empezar a tu ritmo y entrenar a tu
              aire.
            </li>
            <li>
              <strong>Total</strong> — si quieres clases ilimitadas, sauna y
              plan de entrenamiento.
            </li>
            <li>
              <strong>Sin límites</strong> — si quieres un coach que te
              acompañe todo el año.
            </li>
          </ul>
        </Aparecer>

        <Aparecer className="nota-planes">
          <Icono nombre="corazon" tamano={18} />
          ¿Dudas? Ven a conocernos sin compromiso: la primera visita y una clase
          de prueba son gratis.
        </Aparecer>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import Aparecer from '../ui/Aparecer'
import { planes } from '../../datos/contenido'

function formatearPrecio(valor) {
  return valor.toFixed(2).replace('.', ',').replace(/,00$/, '')
}

export default function ResumenPlanes() {
  return (
    <section className="seccion seccion--oscura">
      <div className="contenedor resumen-planes">
        <Aparecer>
          <span className="sobre-titulo sobre-titulo--oscuro">Planes</span>
          <h2 className="h2--oscuro">Precios claros, sin permanencia</h2>
          <p className="p--oscuro">
            Tres planes pensados para tu momento. Si no es tu sitio, te vas
            cuando quieras.
          </p>
        </Aparecer>

        <Aparecer className="resumen-planes__lista" retraso={100}>
          {planes.map((plan) => (
            <div className="resumen-planes__plan" key={plan.nombre}>
              <span>{plan.nombre}</span>
              <strong>
                €{formatearPrecio(plan.precioMensual)}
                <small>/mes</small>
              </strong>
            </div>
          ))}
        </Aparecer>

        <Aparecer retraso={160}>
          <Link to="/planes" className="boton boton--amarillo">
            Ver planes y precios
          </Link>
        </Aparecer>
      </div>
    </section>
  )
}

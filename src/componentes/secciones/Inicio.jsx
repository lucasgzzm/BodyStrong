import Aparecer from '../ui/Aparecer'
import PressDepth from '../ui/PressDepth'
import { estadisticasInicio } from '../../datos/contenido'

const imagenInicio =
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=80'

export default function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio__fondo" aria-hidden="true">
        <img src={imagenInicio} alt="" />
        <div className="inicio__velo" />
      </div>

      <div className="contenedor inicio__interior">
        <Aparecer className="inicio__texto">
          <span className="sobre-titulo sobre-titulo--oscuro">Tu gym, tu gente</span>
          <h1>
            Empieza donde estás.
            <br />
            <em>Nosotros te acompañamos.</em>
          </h1>
          <p className="inicio__subtitulo">
            BodyStrong es más que máquinas: es la gente que te saluda por tu
            nombre, coaches que conocen tu historia y un espacio donde ser
            principiante se celebra. Vívelo una semana sin pagar nada.
          </p>

          <div className="inicio__llamada">
            <PressDepth
              to="/planes"
              className="boton boton--primario boton--grande"
            >
              Empieza mi semana gratis
            </PressDepth>
            <PressDepth
              to="/clases"
              className="boton boton--fantasma-claro boton--grande"
            >
              Ver clases
            </PressDepth>
          </div>

          <ul className="inicio__confianza">
            <li>Sin permanencia</li>
            <li>Cancela cuando quieras</li>
            <li>Primer día con coach incluido</li>
          </ul>
        </Aparecer>

        <Aparecer className="inicio__tarjeta-valoracion" retraso={180}>
          <span className="inicio__estrellas" aria-hidden="true">
            ★★★★★
          </span>
          <div>
            <strong>4,8 / 5</strong>
            <span>1.200+ reseñas</span>
          </div>
        </Aparecer>
      </div>

      <Aparecer className="inicio__estadisticas" retraso={220}>
        <div className="contenedor inicio__stats-cuadricula">
          {estadisticasInicio.map((stat) => (
            <div className="inicio__stat" key={stat.descripcion}>
              <strong>{stat.valor}</strong>
              <span>{stat.descripcion}</span>
            </div>
          ))}
        </div>
      </Aparecer>
    </section>
  )
}

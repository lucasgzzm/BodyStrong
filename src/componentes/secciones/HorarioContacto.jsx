import Icono from '../ui/Icono'
import Aparecer from '../ui/Aparecer'
import { horario, contacto, redes } from '../../datos/contenido'

export default function HorarioContacto() {
  return (
    <section id="horario-contacto" className="seccion">
      <div className="contenedor">
        <Aparecer as="header" className="horario-contacto__cabecera">
          <span className="sobre-titulo">Horarios y contacto</span>
          <h2>Estamos aquí cuando nos necesitas</h2>
          <p>
            Pásate a la hora que mejor te venga o escríbenos por el canal que
            prefieras: resolvemos tus dudas en menos de 24 horas.
          </p>
        </Aparecer>

        <div className="horario-contacto__cuadricula">
          <Aparecer className="horario-contacto__tarjeta" retraso={80}>
            <h3>
              <Icono nombre="reloj" tamano={18} /> Horario de atención
            </h3>
            <ul className="horario-ubicacion">
              {horario.map((franja) => (
                <li key={franja.dias}>
                  <span>{franja.dias}</span>
                  <b>{franja.horas}</b>
                </li>
              ))}
            </ul>
          </Aparecer>

          <Aparecer className="horario-contacto__tarjeta" retraso={160}>
            <h3>
              <Icono nombre="telefono" tamano={18} /> Contacto rápido
            </h3>
            <p className="horario-contacto__contacto">
              <a href={contacto.telefonoHref}>{contacto.telefono}</a>
              <br />
              <a href={contacto.correoHref}>{contacto.correo}</a>
            </p>
            <p className="horario-contacto__direccion">
              <strong>{contacto.direccion.calle}</strong>,{' '}
              {contacto.direccion.zona}
            </p>
            <ul className="horario-contacto__redes">
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
          </Aparecer>
        </div>
      </div>
    </section>
  )
}

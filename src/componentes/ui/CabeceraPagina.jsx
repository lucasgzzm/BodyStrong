import { Link } from 'react-router-dom'
import Aparecer from './Aparecer'

export default function CabeceraPagina({ miga, titulo, texto }) {
  return (
    <header className="cabecera-pagina">
      <div className="contenedor">
        <Aparecer>
          <nav className="migas" aria-label="Ruta de navegación">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <strong>{miga}</strong>
          </nav>
          <h1>{titulo}</h1>
          {texto ? <p>{texto}</p> : null}
        </Aparecer>
      </div>
    </header>
  )
}

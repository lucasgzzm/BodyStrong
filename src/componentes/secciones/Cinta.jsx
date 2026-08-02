import { elementosCinta } from '../../datos/contenido'

export default function Cinta() {
  const elementos = [...elementosCinta, ...elementosCinta]
  return (
    <div className="cinta" aria-hidden="true">
      <div className="cinta__pista">
        {elementos.map((elemento, i) => (
          <span className="cinta__elemento" key={i}>
            {elemento} <span className="cinta__punto">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

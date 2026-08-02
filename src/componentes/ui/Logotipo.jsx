import { Link } from 'react-router-dom'

export default function Logotipo() {
  return (
    <Link to="/" className="logotipo" aria-label="BodyStrong — inicio">
      <img src="/logoGym.png" alt="BodyStrong" />
    </Link>
  )
}

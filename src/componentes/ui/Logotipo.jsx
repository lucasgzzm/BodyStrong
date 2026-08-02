import { Link } from 'react-router-dom'

export default function Logotipo() {
  return (
    <Link to="/" className="logotipo" aria-label="BodyStrong — inicio">
      <img src={`${import.meta.env.BASE_URL}logoGym.png`} alt="BodyStrong" />
    </Link>
  )
}

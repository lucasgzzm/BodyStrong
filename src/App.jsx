import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Encabezado from './componentes/secciones/Encabezado'
import PieDePagina from './componentes/secciones/PieDePagina'
import BotonInstagram from './componentes/ui/BotonInstagram'
import InicioPagina from './paginas/InicioPagina'
import ClasesPagina from './paginas/ClasesPagina'
import PlanesPagina from './paginas/PlanesPagina'
import ContactoPagina from './paginas/ContactoPagina'
import ConveniosPagina from './paginas/ConveniosPagina'
import CuentaPagina from './paginas/CuentaPagina'

function AlCambiarDePagina() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <AlCambiarDePagina />
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<InicioPagina />} />
          <Route path="/clases" element={<ClasesPagina />} />
          <Route path="/planes" element={<PlanesPagina />} />
          <Route path="/contacto" element={<ContactoPagina />} />
          <Route path="/convenios" element={<ConveniosPagina />} />
          <Route path="/cuenta" element={<CuentaPagina />} />
        </Routes>
      </main>
      <PieDePagina />
      <BotonInstagram />
    </>
  )
}

export default App

import { useEffect, useRef } from 'react'

export default function Aparecer({
  children,
  className = '',
  retraso = 0,
  as: Elemento = 'div',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add('esta-visible')
          observador.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return (
    <Elemento
      ref={ref}
      className={`aparecer ${className}`}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
    >
      {children}
    </Elemento>
  )
}

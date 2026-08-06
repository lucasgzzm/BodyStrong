import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'

const PRESS = {
  type: 'spring',
  stiffness: 520,
  damping: 34,
  mass: 0.45,
}

function usePressDepth({ disabled = false, onPressStart, onPressEnd } = {}) {
  const [pressed, setPressed] = useState(false)
  const [tracking, setTracking] = useState(false)
  const [origin, setOrigin] = useState(null)

  const node = useRef(null)
  const pointer = useRef(null)
  const down = useRef(false)

  const began = useRef(onPressStart)
  began.current = onPressStart
  const ended = useRef(onPressEnd)
  ended.current = onPressEnd

  const setDown = useCallback((next) => {
    if (down.current === next) return
    down.current = next
    setPressed(next)
    if (next) began.current?.()
    else ended.current?.()
  }, [])

  const stop = useCallback(() => {
    pointer.current = null
    setTracking(false)
    setOrigin(null)
    setDown(false)
  }, [setDown])

  useEffect(() => {
    if (!tracking) return

    const contains = (evento) => {
      const el = node.current
      if (!el) return false
      const r = el.getBoundingClientRect()
      return (
        evento.clientX >= r.left &&
        evento.clientX <= r.right &&
        evento.clientY >= r.top &&
        evento.clientY <= r.bottom
      )
    }

    const mover = (evento) => {
      if (evento.pointerId !== pointer.current) return
      setDown(contains(evento))
    }
    const soltar = (evento) => {
      if (evento.pointerId !== pointer.current) return
      stop()
    }
    const cancelar = () => stop()
    const ocultar = () => {
      if (document.hidden) stop()
    }

    window.addEventListener('pointermove', mover)
    window.addEventListener('pointerup', soltar)
    window.addEventListener('pointercancel', soltar)
    window.addEventListener('blur', cancelar)
    document.addEventListener('visibilitychange', ocultar)

    return () => {
      window.removeEventListener('pointermove', mover)
      window.removeEventListener('pointerup', soltar)
      window.removeEventListener('pointercancel', soltar)
      window.removeEventListener('blur', cancelar)
      document.removeEventListener('visibilitychange', ocultar)
    }
  }, [tracking, setDown, stop])

  useEffect(() => {
    if (disabled) stop()
  }, [disabled, stop])

  const ref = useCallback((siguiente) => {
    node.current = siguiente
  }, [])

  const bind = {
    onPointerDown: (evento) => {
      if (disabled) return
      if (evento.pointerType === 'mouse' && evento.button !== 0) return
      const r = evento.currentTarget.getBoundingClientRect()
      setOrigin({
        x: Math.max(-1, Math.min(1, ((evento.clientX - r.left) / r.width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((evento.clientY - r.top) / r.height) * 2 - 1)),
      })
      pointer.current = evento.pointerId
      setTracking(true)
      setDown(true)
    },
    onKeyDown: (evento) => {
      if (disabled || evento.repeat) return
      if (evento.key === ' ' || evento.key === 'Enter') setDown(true)
    },
    onKeyUp: (evento) => {
      if (evento.key === ' ' || evento.key === 'Enter' || evento.key === 'Escape') {
        setDown(false)
      }
    },
    onBlur: () => stop(),
  }

  return { pressed, origin, ref, bind }
}

export default function PressDepth({
  children,
  depth = 4,
  tilt = 7,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  envClass = '',
  to,
  href,
  'aria-label': ariaLabel,
}) {
  const reduced = useReducedMotion()
  const { pressed, origin, ref, bind } = usePressDepth({ disabled })
  const lean = pressed && origin && !reduced ? origin : null

  const etiquetas = {
    ref,
    className: `press ${envClass}`.trim(),
    'aria-label': ariaLabel,
    onClick,
    ...bind,
  }
  const estilos = {
    paddingBottom: depth,
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
  }

  const contenido = (
    <>
      <span aria-hidden className="press__base" style={{ top: depth }} />
      <motion.span
        initial={false}
        animate={{
          y: pressed ? depth : 0,
          rotateX: lean ? -lean.y * tilt : 0,
          rotateY: lean ? lean.x * tilt : 0,
        }}
        transition={reduced ? { duration: 0 } : PRESS}
        style={{ transformPerspective: 340 }}
        className={`press__cara ${className}`}
      >
        <motion.span
          aria-hidden
          initial={false}
          animate={{ opacity: pressed ? 0 : 1 }}
          transition={reduced ? { duration: 0 } : PRESS}
          className="press__brillo"
        />
        {children}
      </motion.span>
    </>
  )

  if (to) {
    return (
      <Link {...etiquetas} to={to} style={estilos}>
        {contenido}
      </Link>
    )
  }

  if (href) {
    return (
      <a {...etiquetas} href={href} target="_blank" rel="noreferrer" style={estilos}>
        {contenido}
      </a>
    )
  }

  return (
    <button
      {...etiquetas}
      type={type}
      disabled={disabled}
      data-pressed={pressed ? '' : undefined}
      style={estilos}
    >
      {contenido}
    </button>
  )
}

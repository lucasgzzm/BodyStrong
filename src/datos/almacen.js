const CLAVE_USUARIOS = 'bodystrong_usuarios'
const CLAVE_SESION = 'bodystrong_sesion'
const CLAVE_MEMBRESIA = 'bodystrong_membresia'
const CLAVE_ENTRADA = 'bodystrong_entrada'
const CLAVE_PLAN_PENDIENTE = 'bodystrong_plan_pendiente'

const DIAS_MEMBRESIA = 30

function leer(clave, defecto) {
  try {
    const crudo = localStorage.getItem(clave)
    return crudo ? JSON.parse(crudo) : defecto
  } catch {
    return defecto
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor))
  } catch {
    // Sin espacio o modo privado: se ignora
  }
}

function hoyISO() {
  const ahora = new Date()
  const mes = String(ahora.getMonth() + 1).padStart(2, '0')
  const dia = String(ahora.getDate()).padStart(2, '0')
  return `${ahora.getFullYear()}-${mes}-${dia}`
}

function fechaDesdeISO(iso) {
  const [anio, mes, dia] = iso.split('-').map(Number)
  return new Date(anio, mes - 1, dia)
}

export function obtenerUsuarios() {
  return leer(CLAVE_USUARIOS, [])
}

function guardarUsuarios(usuarios) {
  guardar(CLAVE_USUARIOS, usuarios)
}

export function registrarUsuario({ nombre, email, clave }) {
  const usuarios = obtenerUsuarios()
  const existe = usuarios.some(
    (u) => u.email.toLowerCase() === email.toLowerCase(),
  )
  if (existe) {
    return { ok: false, error: 'Ya existe una cuenta con ese correo.' }
  }
  const usuario = {
    id: `u_${Date.now()}`,
    nombre: nombre.trim(),
    email: email.trim().toLowerCase(),
    clave,
  }
  guardarUsuarios([...usuarios, usuario])
  iniciarSesion(usuario.id)
  return { ok: true, usuario }
}

export function iniciarSesion(email, clave) {
  const usuario = obtenerUsuarios().find(
    (u) =>
      u.email.toLowerCase() === email.trim().toLowerCase() &&
      u.clave === clave,
  )
  if (!usuario) {
    return { ok: false, error: 'Correo o contraseña incorrectos.' }
  }
  guardar(CLAVE_SESION, { id: usuario.id })
  return { ok: true, usuario }
}

export function cerrarSesion() {
  guardar(CLAVE_SESION, null)
}

export function sesionActual() {
  const sesion = leer(CLAVE_SESION, null)
  if (!sesion) return null
  return obtenerUsuarios().find((u) => u.id === sesion.id) || null
}

export function seleccionarPlanPendiente(plan) {
  guardar(CLAVE_PLAN_PENDIENTE, {
    nombre: plan.nombre,
    precioMensual: plan.precioMensual,
  })
}

export function planPendiente() {
  return leer(CLAVE_PLAN_PENDIENTE, null)
}

export function consumirPlanPendiente() {
  const plan = planPendiente()
  guardar(CLAVE_PLAN_PENDIENTE, null)
  return plan
}

export function activarMembresia(plan) {
  guardar(CLAVE_MEMBRESIA, {
    plan: plan.nombre,
    precioMensual: plan.precioMensual,
    fechaInicio: hoyISO(),
  })
}

export function renovarMembresia() {
  const membresia = obtenerMembresia()
  if (membresia) {
    activarMembresia({ nombre: membresia.plan, precioMensual: membresia.precioMensual })
  }
}

export function obtenerMembresia() {
  return leer(CLAVE_MEMBRESIA, null)
}

export function calcularMembresia() {
  const membresia = obtenerMembresia()
  if (!membresia) return null

  const inicio = fechaDesdeISO(membresia.fechaInicio)
  const fin = new Date(inicio)
  fin.setDate(fin.getDate() + DIAS_MEMBRESIA)

  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  inicio.setHours(0, 0, 0, 0)
  fin.setHours(0, 0, 0, 0)

  const transcurrido = Math.max(
    0,
    Math.floor((hoy.getTime() - inicio.getTime()) / 86400000),
  )
  const restante = Math.max(0, DIAS_MEMBRESIA - transcurrido)
  const vencida = hoy >= fin

  return {
    ...membresia,
    inicio,
    fin,
    transcurrido,
    restante,
    total: DIAS_MEMBRESIA,
    vencida,
  }
}

export function estadoEntradaHoy() {
  const usuario = sesionActual()
  if (!usuario) return { usado: false }
  const guardado = leer(CLAVE_ENTRADA, null)
  if (!guardado || guardado.fecha !== hoyISO() || guardado.usuarioId !== usuario.id) {
    return { usado: false, fecha: hoyISO() }
  }
  return guardado
}

export function marcarEntradaHoy() {
  const usuario = sesionActual()
  if (!usuario) return
  guardar(CLAVE_ENTRADA, {
    usuarioId: usuario.id,
    fecha: hoyISO(),
    usado: true,
  })
}

export function tokenQr() {
  const usuario = sesionActual()
  if (!usuario) return ''
  return `BodyStrong:${usuario.id}:${hoyISO()}`
}

export { DIAS_MEMBRESIA }

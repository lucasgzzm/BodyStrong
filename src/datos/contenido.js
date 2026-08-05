const imagen = (id, ancho = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${ancho}&q=80`

export const enlacesNavegacion = [
  { etiqueta: 'Inicio', destino: '/' },
  { etiqueta: 'Clases', destino: '/clases' },
  { etiqueta: 'Planes', destino: '/planes' },
  { etiqueta: 'Ubicación', destino: '/contacto' },
]

export const marca = {
  nombre: 'BodyStrong',
  eslogan: 'Empieza donde estás. Nosotros te acompañamos.',
  descripcion:
    'BodyStrong es más que máquinas: es la gente que te saluda por tu nombre, coaches que conocen tu historia y un espacio donde ser principiante se celebra. Vívelo una semana sin pagar nada.',
  cta: {
    principal: 'Empieza mi semana gratis',
    secundario: 'Ver clases',
  },
}

export const estadisticasInicio = [
  { valor: '2.500+', descripcion: 'personas entrenan con nosotros' },
  { valor: '12', descripcion: 'clases distintas cada semana' },
  { valor: '20', descripcion: 'coaches titulados y cercanos' },
  { valor: '4,8★', descripcion: 'valoración media en reseñas' },
]

export const razones = [
  {
    titulo: 'Acompañamiento de verdad',
    texto: 'Coaches que te conocen por tu nombre, te corrigen la técnica y celebran cada progreso. Sin agobios, a tu ritmo.',
    icono: 'escudoCorazon',
  },
  {
    titulo: 'Aquí no se juzga',
    texto: 'Da igual si nunca has pisado un gimnasio. Cada cuerpo tiene su historia y la tuya nos importa de verdad.',
    icono: 'corazon',
  },
  {
    titulo: 'Una comunidad que te impulsa',
    texto: 'Entrena solo o en grupo: siempre habrá alguien animándote con un «¡vamos, uno más!» justo cuando lo necesitas.',
    icono: 'usuarios',
  },
  {
    titulo: 'Ritmo y bienestar',
    texto: 'Más de 12 clases por semana y horarios pensados para tu vida real, en un ambiente que te da energía, no presión.',
    icono: 'chispa',
  },
]

export const clases = [
  {
    nombre: 'Fuerza & musculación',
    descripcion:
      'Máquinas guiadas y zona libre, con coaches que te enseñan a empezar con buen pie y sin miedo.',
    objetivo:
      'Ganar fuerza y masa muscular con una técnica segura desde el primer día.',
    nivel: 'Todos los niveles',
    duracion: '45–75 min',
    horarios: ['Lun · 18:00', 'Mié · 19:30', 'Sáb · 10:00'],
    instructor: 'Laura',
    etiquetas: ['45–75 min', 'Todos los niveles'],
    imagen: imagen('photo-1534438327276-14e5300c3a48', 800),
  },
  {
    nombre: 'Funcional',
    descripcion:
      'Sesiones dinámicas para moverte mejor en el día a día. Nada de ejercicios raros: sudor, risas y buena energía.',
    objetivo:
      'Mejorar tu movilidad, tu equilibrio y tu energía para el día a día.',
    nivel: 'Principiantes bienvenidos',
    duracion: '45 min',
    horarios: ['Mar · 9:00', 'Jue · 20:00', 'Sáb · 11:30'],
    instructor: 'Carlos',
    etiquetas: ['45 min', 'Principiantes bienvenidos'],
    imagen: imagen('photo-1517836357463-d25dfeac3438', 800),
  },
  {
    nombre: 'Yoga & movilidad',
    descripcion:
      'Respira, estira y escucha a tu cuerpo. Perfecta para complementar tu entrenamiento o como tu clase favorita de la semana.',
    objetivo:
      'Estirar, respirar y recuperar tu cuerpo sin presión y con constancia.',
    nivel: 'Relajado',
    duracion: '60 min',
    horarios: ['Mar · 18:30', 'Jue · 12:30', 'Dom · 10:00'],
    instructor: 'Marta',
    etiquetas: ['60 min', 'Relajado'],
    imagen: imagen('photo-1508805909537-d26d9e2a76f5', 800),
  },
  {
    nombre: 'Ciclo indoor',
    descripcion:
      'Pedalea en grupo con música que te lleva. Luz baja, ritmo alto y una buena energía que engancha.',
    objetivo: 'Quemar calorías en grupo, al ritmo que tú marques.',
    nivel: 'Intensidad a tu medida',
    duracion: '45 min',
    horarios: ['Lun · 20:00', 'Mié · 9:30', 'Vie · 19:00'],
    instructor: 'David',
    etiquetas: ['45 min', 'Intensidad a tu medida'],
    imagen: imagen('photo-1541625602330-2277a4c46182', 800),
  },
  {
    nombre: 'HIIT',
    descripcion:
      'Rondas cortas e intensas con descansos generosos. Resultados visibles en solo 30 minutos.',
    objetivo: 'Resultados visibles en sesiones cortas e intensas.',
    nivel: 'Para sacudir la semana',
    duracion: '30 min',
    horarios: ['Mar · 19:00', 'Jue · 8:30', 'Vie · 18:00'],
    instructor: 'Nuria',
    etiquetas: ['30 min', 'Para sacudir la semana'],
    imagen: imagen('photo-1571019614242-c5c5dee9f50b', 800),
  },
  {
    nombre: 'Boxeo & saco',
    descripcion:
      'Descarga el estrés, gana confianza y mejora tu coordinación. Guantes incluidos, cero contacto.',
    objetivo:
      'Descargar el estrés, ganar confianza y mejorar tu coordinación.',
    nivel: 'Sin contacto',
    duracion: '50 min',
    horarios: ['Lun · 19:30', 'Mié · 18:00', 'Sáb · 12:00'],
    instructor: 'Raúl',
    etiquetas: ['50 min', 'Sin contacto'],
    imagen: imagen('photo-1583454110551-21f2fa2afe61', 800),
  },
]

export const planes = [
  {
    nombre: 'Flex',
    eslogan: 'Para empezar a tu ritmo',
    precioMensual: 24990,
    beneficios: [
      'Acceso libre al gimnasio',
      'Vestidores y taquillas',
      'App con rutinas guiadas',
      '1 clase de iniciación al mes',
      'Sin permanencia',
    ],
    llamado: 'Empieza con Flex',
    promocion: 'Primera clase de iniciación gratis',
    destacado: false,
  },
  {
    nombre: 'Total',
    eslogan: 'El favorito de la comunidad',
    precioMensual: 34990,
    beneficios: [
      'Todo lo de Flex',
      'Clases ilimitadas',
      'Sauna y zona de relax',
      'Invitado gratis 1 vez al mes',
      'Plan de entrenamiento inicial',
      'Sin permanencia',
    ],
    llamado: 'Empieza con Total',
    promocion: 'Un invitado gratis cada mes',
    destacado: true,
  },
  {
    nombre: 'Sin límites',
    eslogan: 'Acompañamiento 360º',
    precioMensual: 44990,
    beneficios: [
      'Todo lo de Total',
      'Coach asignado que te sigue',
      'Plan personalizado + revisión mensual',
      'Plan de nutrición básico',
      'Acceso prioritario a clases',
      'Sin permanencia',
    ],
    llamado: 'Pide tu prueba',
    promocion: 'Primer mes con un 20 % de descuento',
    destacado: false,
  },
]

export const galeria = [
  {
    src: imagen('photo-1518611012118-696072aa579a', 900),
    leyenda: 'Zona de fuerza libre',
  },
  {
    src: imagen('photo-1521805103424-d8f8430e8933', 900),
    leyenda: 'Sala de clases en grupo',
  },
  {
    src: imagen('photo-1571902943202-507ec2618e8f', 900),
    leyenda: 'Sacos y zona de boxeo',
  },
  {
    src: imagen('photo-1541534741688-6078c6bfb5c5', 900),
    leyenda: 'Rincón de pesos libres',
  },
  {
    src: imagen('photo-1532384748853-8f54a8f476e2', 900),
    leyenda: 'Máquinas guiadas',
  },
  {
    src: imagen('photo-1546483875-ad9014c88eba', 900),
    leyenda: 'Un espacio para todas las edades',
  },
]

export const testimonios = [
  {
    cita:
      'Empecé tras mi segundo hijo, con cero forma física y mucho miedo. A la semana me saludaban por mi nombre y me preguntaban por el peque. Hoy entreno tres días y hasta me he atrevido con mi primera clase de boxeo.',
    nombre: 'Lucía',
    meta: '34 años · socia desde hace 8 meses',
    avatar: imagen('photo-1544005313-94ddf0286df2', 200),
  },
  {
    cita:
      'Tuve una lesión de espalda y estaba convencido de que el gimnasio no era para mí. Un coach me preparó una rutina adaptada, sin prisa y sin humillaciones. Me siento más fuerte que con treinta.',
    nombre: 'Marcos',
    meta: '47 años · socio desde hace 2 años',
    avatar: imagen('photo-1507003211169-0a1dd7228f2d', 200),
  },
  {
    cita:
      'He estado en gimnasios grandes donde eres un número más. Aquí la gente se conoce de verdad. Encontré mi grupo de ciclo y por primera vez ser constante se me hace fácil.',
    nombre: 'Carla',
    meta: '26 años · socia desde hace 5 meses',
    avatar: imagen('photo-1438761681033-6461ffad8d80', 200),
  },
]

export const publicacionesInsta = [
  imagen('photo-1434682881908-b43d0467b798', 600),
  imagen('photo-1526506118085-60ce8714f8c5', 600),
  imagen('photo-1574680096145-d05b474e2155', 600),
  imagen('photo-1571019613454-1cb2f99b2d8b', 600),
  imagen('photo-1552674605-db6ffd4facb5', 600),
  imagen('photo-1550345332-09e3ac987658', 600),
]

export const elementosCinta = [
  'Fuerza',
  'Comunidad',
  'Ritmo',
  'Bienestar',
  'Constancia',
  'Buena energía',
  'Sin juicios',
  'Sudar con ganas',
]

export const horario = [
  { dias: 'Lunes a viernes', horas: '6:30 – 23:00' },
  { dias: 'Sábados', horas: '9:00 – 21:00' },
  { dias: 'Domingos y festivos', horas: '9:00 – 14:00' },
]

export const redes = [
  { nombre: 'Instagram', destino: 'https://instagram.com', icono: 'instagram' },
  { nombre: 'TikTok', destino: 'https://tiktok.com', icono: 'tiktok' },
  { nombre: 'YouTube', destino: 'https://youtube.com', icono: 'youtube' },
  { nombre: 'Facebook', destino: 'https://facebook.com', icono: 'facebook' },
]

export const contacto = {
  direccion: {
    calle: 'Calle del Entreno, 12',
    zona: 'Centro',
    nota: 'A 3 minutos del metro y de varias paradas de autobús',
  },
  telefono: '+34 910 123 456',
  telefonoHref: 'tel:+34910123456',
  correo: 'hola@bodystrong.es',
  correoHref: 'mailto:hola@bodystrong.es',
  whatsapp: '+34 610 123 456',
}
